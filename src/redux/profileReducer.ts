import {
    AddPostActionType,
    NewMessageBodyType,
    PostsType,
    RootStateType,
    SendMessageType,
    UpdateTestActionType
} from "./state";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


type ProfileReducerLocalStateType = {
    posts: PostsType[]
    newPostText: string
}

export const profileReducer = (state: ProfileReducerLocalStateType,
    action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => {

    if (action.type === ADD_POST) {
        let newPost = {id: 5, message: action.postMessage, likesCount: 0};
        state.posts.unshift(newPost)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text
    }
    return state
    // switch (action.type) {
    //     case ADD_POST:
    //         let newPost = {id: 5, message: action.postMessage, likesCount: 0};
    //         state.posts.unshift(newPost);
    //         return state
    //     case UPDATE_NEW_POST_TEXT:
    //         state.newPostText = action.text
    //         return state
    // }
}

export const addPostActionCreator = (text: string): AddPostActionType =>
    ({type: ADD_POST, postMessage: text})
export const UpdateNewPostTextActionCreator = (text: string): UpdateTestActionType =>
    ({type: UPDATE_NEW_POST_TEXT, text: text})





