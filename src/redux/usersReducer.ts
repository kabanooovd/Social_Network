import {ActionTypes} from "./ActionTipizationType";

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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

export type UsersReducerLocalStateType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}


let initialState: UsersReducerLocalStateType = {
    users: [ ],
    pageSize: 25,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: UsersReducerLocalStateType = initialState, action: ActionTypes): UsersReducerLocalStateType => {

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

        default:
            return state
    }
}

export const followAC = (userID: number): followActionType => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number): unFollowActionType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType[]): UsersToSetActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setIsFetchingAC = (isFetching: boolean): toggleFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})




