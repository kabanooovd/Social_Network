import {
    AddPostActionType,
    NewMessageBodyType,
    PostsType,
    RootStateType,
    SendMessageType,
    UpdateTestActionType
} from "./store";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hey mate', likesCount: 5},
        {id: 2, message: 'Did you understand what is it props?', likesCount: 100}
    ]
}

type ProfileReducerLocalStateType = {
    posts: PostsType[]
    newPostText: string
}

export const profileReducer = (state: ProfileReducerLocalStateType = initialState,
                               action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => {

    // if (action.type === ADD_POST) {
    //     let newPost = {id: 5, message: action.postMessage, likesCount: 0};
    //     state.posts.unshift(newPost)
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.text
    // }
    // return state
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: action.postMessage, likesCount: 0};
            let stateCopy = {...state}
            stateCopy.posts = [...stateCopy.posts]
            stateCopy.posts.unshift(newPost);
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = (text: string): AddPostActionType =>
    ({type: ADD_POST, postMessage: text})
export const UpdateNewPostTextActionCreator = (text: string): UpdateTestActionType =>
    ({type: UPDATE_NEW_POST_TEXT, text: text})





