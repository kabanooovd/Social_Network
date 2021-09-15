import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    newPostText: '',
    posts: [
        {id: 1, message: 'Hey mate', likesCount: 5},
        {id: 2, message: 'Did you understand what is it props?', likesCount: 100}
    ],
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

type ProfileReducerLocalStateType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType
    status: string
}

type GeneralProfileActionType = AddPostActionType           | UpdateTestActionType      |
                                setUserProfileActionType    | setStatusACActionType

export const profileReducer = (state: ProfileReducerLocalStateType = initialState, action: GeneralProfileActionType) => {

    //et stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
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
        default:
            return state
    }
}

export type setStatusACActionType = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: string) =>
    ({type: SET_STATUS, status}) as const

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (text: string) =>
    ({type: ADD_POST, postMessage: text}) as const

export type UpdateTestActionType = ReturnType<typeof UpdateNewPostTextActionCreator>
export const UpdateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text}) as const

export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    })
}




export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}










































// import {
//     AddPostActionType,
//     NewMessageBodyType,
//     PostsType,
//     RootStateType,
//     SendMessageType,
//     UpdateTestActionType
// } from "./store";
//
//
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//
// let initialState = {
//     newPostText: '',
//     posts: [
//         {id: 1, message: 'Hey mate', likesCount: 5},
//         {id: 2, message: 'Did you understand what is it props?', likesCount: 100}
//     ]
// }
//
// type ProfileReducerLocalStateType = {
//     posts: PostsType[]
//     newPostText: string
// }
//
// export const profileReducer = (state: ProfileReducerLocalStateType = initialState,
//                                action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => {
//
//     //et stateCopy;
//     switch (action.type) {
//         case ADD_POST: {
//             let newPost = {id: 5, message: state.newPostText, likesCount: 0};
//             return {...state, posts: [newPost, ...state.posts], newPostText: ''}
//         }
//         case UPDATE_NEW_POST_TEXT: {
//             return {...state, newPostText: action.text}
//         }
//         default:
//             return state
//     }
// }
//
// export const addPostActionCreator = (text: string): AddPostActionType =>
//     ({type: ADD_POST, postMessage: text})
// export const UpdateNewPostTextActionCreator = (text: string): UpdateTestActionType =>
//     ({type: UPDATE_NEW_POST_TEXT, text: text})





