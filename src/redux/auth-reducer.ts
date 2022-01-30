import { authAPI, securityApi } from "../api/api";
import { Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import {
	setErrorModeAC,
	SetErrorModeAC_T,
	setInitModeAC,
} from "./common-data-reducer";

export type ThunkType<TAction extends Action = AnyAction> = ThunkAction<
	Promise<void>,
	AppStateType,
	unknown,
	TAction
>;

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA = "GET_CAPTCHA";

type AuthUserDataType = {
	id: string;
	email: string;
	login: string;
	isAuth: boolean;
	captchaUrl?: string;
};

export type setUserDataActionType = {
	type: "SET_USER_DATA";
	payload: AuthUserDataType;
};

export type getCapchaActionType = ReturnType<typeof getCaptchaUrlAC>;

export type GeneralUsersActionTypes = setUserDataActionType;

let initialState: AuthUserDataType = {
	id: "",
	email: "",
	login: "",
	isAuth: false,
	captchaUrl: "",
};

export const authReducer = (
	state: AuthUserDataType = initialState,
	action: GeneralUsersActionTypes
): AuthUserDataType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return { ...state, ...action.payload };
		}
		default:
			return state;
	}
};

export const setAuthUserDataAC = (
	id: string,
	email: string,
	login: string,
	isAuth: boolean
): setUserDataActionType => {
	return { type: "SET_USER_DATA", payload: { id, email, login, isAuth } };
};

export const getCaptchaUrlAC = (captchaUrl: string) => {
	return { type: "SET_USER_DATA", payload: { captchaUrl } } as const;
};

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
	let response = await authAPI.me();
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data;
		dispatch(setAuthUserDataAC(id, email, login, true));
		dispatch(setInitModeAC(true));
	} else {
		dispatch(setInitModeAC(true));
	}
};

export const login_TC = (
	email: string,
	password: string,
	rememberMe: boolean,
    captcha: string,
): ThunkType<GeneralUsersActionTypes | SetErrorModeAC_T> => {
	return async (dispatch) => {
		const response = await authAPI.login({ email, password, rememberMe, captcha });
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserDataTC());
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrlTC);
			} else {
				if (response.data.messages.length) {
					dispatch(setErrorModeAC(response.data.messages[0]));
					dispatch(getCaptchaUrlTC);
				} else {
					dispatch(setErrorModeAC("Some error hes occurred"));
					dispatch(getCaptchaUrlTC);
				}
			}
		}
	};
};

export const getCaptchaUrlTC = async (dispatch: Dispatch) => {
	const resp = await securityApi.getCaptchaUrl();
	dispatch(getCaptchaUrlAC(resp.data.url));
};

export const logout_TC = () => async (dispatch: Dispatch) => {
	let response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserDataAC("", "", "", false));
	}
};

// export type ThunkAction<
//     R, // Return type of the thunk function
//     S, // state type used by getState
//     E, // any "extra argument" injected into the thunk
//     A extends Action // known types of actions that can be dispatched
//     > = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
// ThunkAction<void AppStateType unknown AnyAction>
