const SET_USER_DATA = 'SET_USER_DATA';

type AuthUserDataType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

export type setUserDataActionType = {
    type: 'SET_USER_DATA';
    data: AuthUserDataType
    //isFetching: boolean
}


type GeneralUsersActionTypes = setUserDataActionType


let initialState: AuthUserDataType = {
    id: '',
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (state: AuthUserDataType = initialState, action: GeneralUsersActionTypes): AuthUserDataType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }

        default:
            return state
    }
}

export const setAuthUserDataAC = (id: string, email: string, login: string):setUserDataActionType => {
    return {type: "SET_USER_DATA", data: {id, email, login, isAuth: false}}
}




