

export type ErrorMode_T = null | string

type CommonDataState_T = {
    errorMode: ErrorMode_T
}
const initState = {
    errorMode: null
}

export const commonDataReducer = (state: CommonDataState_T = initState, action: CommonDataAction_T): CommonDataState_T => {
    switch (action.type) {
        case 'DATA/SET-ERROR-MODE': {
            return {...state, errorMode: action.errorMode}
        }
        default: return state
    }
}

export type SetErrorModeAC_T = ReturnType<typeof setErrorModeAC>
export const setErrorModeAC = (errorMode: ErrorMode_T) => {
    return {type: 'DATA/SET-ERROR-MODE', errorMode} as const
}

export type CommonDataAction_T = SetErrorModeAC_T