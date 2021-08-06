import {ActionTypes} from "./ActionTipizationType";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hey mate', likesCount: 5},
        {id: 2, message: 'Did you understand what is it props?', likesCount: 100}
    ]
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfileReducerLocalStateType = {
    posts: PostsType[]
    newPostText: string
}

export const profileReducer = (state: ProfileReducerLocalStateType = initialState, action: ActionTypes) => {

    //et stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.text}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (text: string) =>
    ({type: ADD_POST, postMessage: text})
export const UpdateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text})











































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





