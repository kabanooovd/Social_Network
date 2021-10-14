import {Action, AnyAction, Dispatch} from "redux"
import {GeneralUsersActionTypes, getAuthUserDataTC} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

// export type ThunkType<TAction extends Action = AnyAction> = ThunkAction<Promise<void>, AppStateType, unknown, TAction>

export type ErrorMode_T = null | string

type CommonDataState_T = {
    errorMode: ErrorMode_T
    initMode: boolean
}
const initState = {
    initMode: false,
    errorMode: null,
}

export const commonDataReducer = (state: CommonDataState_T = initState, action: CommonDataAction_T): CommonDataState_T => {
    switch (action.type) {
        case 'DATA/SET-ERROR-MODE': {
            return {...state, errorMode: action.errorMode}
        }
        case 'DATA/SET-INIT-MODE': {
            return {...state, initMode: action.initMode}
        }
        default: return state
    }
}

export type SetInitModeAC_T = ReturnType<typeof setInitModeAC>
export const setInitModeAC = (initMode: boolean) => {
    return {type: 'DATA/SET-INIT-MODE', initMode} as const
}

export type SetErrorModeAC_T = ReturnType<typeof setErrorModeAC>
export const setErrorModeAC = (errorMode: ErrorMode_T) => {
    return {type: 'DATA/SET-ERROR-MODE', errorMode} as const
}

export type CommonDataAction_T = SetErrorModeAC_T | SetInitModeAC_T