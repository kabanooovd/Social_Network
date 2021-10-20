import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE_NEW_POST_TEXT';
const RM_POST = 'profile/RM-POST';

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsForProfileType
    photos: PhotosForProfileType
}
type PhotosForProfileType = {
    small: string
    large: string
}
type ContactsForProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

let initialState: ProfileReducerLocalStateType = {
    posts: [
        {id: 1, message: 'Hey mate', likesCount: 5},
        {id: 2, message: 'Did you understand what is it props?', likesCount: 100}
    ],
    newPostText: '',
    //profile: null
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileReducerLocalStateType = {
    posts: PostsType[]
    profile: ProfileType
    newPostText: string
    status: string
}

type GeneralProfileActionType = AddPostActionType           |
                                setUserProfileActionType    |
                                setStatusACActionType       |
                                RemoveChosenPost_T          |
                                UpdateTestActionType

export const profileReducer = (state: ProfileReducerLocalStateType = initialState, action: GeneralProfileActionType) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: action.postMessage, likesCount: 0};
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.text}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case RM_POST: {
            return {...state, posts: state.posts.filter(el => el.id !== action.postID)}
        }
        default:
            return state
    }
}

export type RemoveChosenPost_T = ReturnType<typeof removeChosenPost>
export const removeChosenPost = (postID: number) => {
    return {type: RM_POST, postID} as const
}

export type setStatusACActionType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) =>
    ({type: SET_STATUS, status}) as const

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (newPostText: string) =>
    ({type: ADD_POST, postMessage: newPostText}) as const

export type UpdateTestActionType = ReturnType<typeof UpdateNewPostTextActionCreator>
export const UpdateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text}) as const

export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const getStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(response.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
}

export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}


































