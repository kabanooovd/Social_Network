import {ActionTypes} from "./ActionTipizationType";

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
}


let initialState: UsersReducerLocalStateType = {
    users: [
        // {id: 1,
        //     photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
        //     followed: true, fullName: 'Dimas', status: 'student', location: {city: 'FishBurg', country: 'RF'}},
        // {id: 2,
        //     photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
        //     followed: false, fullName: 'Sashsa', status: 'worker', location: {city: 'Moscow', country: 'RF'}},
        // {id: 3,
        //     photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
        //     followed: true, fullName: 'Masha', status: 'waitress', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 4,
        //     photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
        //     followed: false, fullName: 'Pashsa', status: 'rocker', location: {city: 'Minsk', country: 'RB'}},
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }
}

export const followAC = (userID: number): followActionType => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number): unFollowActionType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType[]): UsersToSetActionType => ({type: SET_USERS, users})





