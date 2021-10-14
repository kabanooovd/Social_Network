import {authAPI} from "../api/api";
import {Action, AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {setErrorModeAC, SetErrorModeAC_T, setInitModeAC} from "./common-data-reducer";

export type ThunkType<TAction extends Action = AnyAction> = ThunkAction<Promise<void>, AppStateType, unknown, TAction>

const SET_USER_DATA = 'SET_USER_DATA';

type AuthUserDataType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

export type setUserDataActionType = {
    type: 'SET_USER_DATA';
    payload: AuthUserDataType
}

export type GeneralUsersActionTypes = setUserDataActionType

let initialState: AuthUserDataType = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: AuthUserDataType = initialState, action: GeneralUsersActionTypes): AuthUserDataType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: string, email: string, login: string, isAuth: boolean):setUserDataActionType => {
    return {type: "SET_USER_DATA", payload: {id, email, login, isAuth}}
}

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    }).then(() => {
        dispatch(setInitModeAC(true))
    })
}

export const login_TC = (email: string, password: string, rememberMe: boolean): ThunkType<GeneralUsersActionTypes | SetErrorModeAC_T> => {
    return async (dispatch) => {
        authAPI.login({email, password, rememberMe})
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
                    if (res.data.messages.length) {
                        dispatch(setErrorModeAC(res.data.messages[0]))
                    } else {
                        dispatch(setErrorModeAC('Some error hes occurred'))
                    }
                }
            })
    }
}

export const logout_TC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch((setAuthUserDataAC('', '', '', false)))
            }
        })
}













// export type ThunkAction<
//     R, // Return type of the thunk function
//     S, // state type used by getState
//     E, // any "extra argument" injected into the thunk
//     A extends Action // known types of actions that can be dispatched
//     > = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
// ThunkAction<void AppStateType unknown AnyAction>

