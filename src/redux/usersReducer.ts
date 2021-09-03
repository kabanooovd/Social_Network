import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import { ThunkAction } from "redux-thunk";
import {Action, AnyAction} from 'redux'

export type ThunkType<TAction extends Action = AnyAction> = ThunkAction<Promise<void>, AppStateType, unknown, TAction>

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    photos: {small: string, large: string}
    followed: boolean
    name: string
    status: string
    location: LocationType
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type toggleFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING';
    isFetching: boolean
}
export type setTotalUsersCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalCount: number
}
export type setCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type followActionType = {
    type: 'FOLLOW'
    userID: number
}
export type unFollowActionType = {
    type: 'UNFOLLOW'
    userID: number
}
export type UsersToSetActionType = {
    type: 'SET_USERS'
    users: UsersType[]
}
export type followingInProgressActionType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number

}

type GeneralUsersActionTypes =    toggleFetchingActionType          | setTotalUsersCountActionType
                                | setCurrentPageActionType          | followActionType
                                | unFollowActionType                | UsersToSetActionType
                                | followingInProgressActionType

export type UsersReducerLocalStateType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

    let initialState: UsersReducerLocalStateType = {
    users: [ ],
    pageSize: 25,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}




export const usersReducer = (state: UsersReducerLocalStateType = initialState, action: GeneralUsersActionTypes): UsersReducerLocalStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID? {...el, followed: false} : el)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID? {...el, followed: true} : el)}
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)}
        }

        default:
            return state
    }
}

export const followACSuccess = (userID: number): followActionType => ({type: FOLLOW, userID})
export const unFollowACSuccess = (userID: number): unFollowActionType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType[]): UsersToSetActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setIsFetchingAC = (isFetching: boolean): toggleFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const followingInProgressAC = (isFetching: boolean, userId: number): followingInProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

// Создаем thunk
export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType<toggleFetchingActionType | UsersToSetActionType | setTotalUsersCountActionType> => {
    return async (dispatch, getState) => {
        dispatch(setIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            //dispatch(setCurrentPageAC(data))
            dispatch(setTotalUsersCountAC(data.totalCount))
        });
    }
}

export const followTC = (userID: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, userID))
        usersAPI.follow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowACSuccess(userID))
                }
                dispatch(followingInProgressAC(false, userID))
            });
    }
}

export const unfollowTC = (userID: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(followingInProgressAC(true, userID))
        usersAPI.unfollow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followACSuccess(userID))
                }
                dispatch(followingInProgressAC(false, userID))
            });
    }
}




