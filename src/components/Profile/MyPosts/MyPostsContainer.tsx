import React from 'react';
import {
    AddPostActionType,
    NewMessageBodyType, RootStateType,
    SendMessageType,
    StoreType,
    UpdateTestActionType
} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";

type ProfilePageContainerPropsType = {
    store: StoreType
}

// const MyPostsContainer = (props: ProfilePageContainerPropsType) => {
//
//     const state = props.store.getState();
//
//     let addPost = (text: string) => props.store.dispatch(addPostActionCreator(text))
//
//     let onPostChange = (text: string) => {
//         let action: UpdateTestActionType = UpdateNewPostTextActionCreator(text)
//         props.store.dispatch(action)
//     }
//
//     return <MyPosts updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.profilePage.posts}
//                     newPostText={state.profilePage.newPostText}
//     />
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: AddPostActionType | UpdateTestActionType | NewMessageBodyType | SendMessageType) => void) => {
    return {
        updateNewPostText: (text: string) => {
            let action: UpdateTestActionType = UpdateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;