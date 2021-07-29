import React from 'react';
import {StoreType, UpdateTestActionType} from "../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type ProfilePageContainerPropsType = {
    store: StoreType
}

const MyPostsContainer = (props: ProfilePageContainerPropsType) => {

    const state = props.store.getState();

    let addPost = (text: string) => props.store.dispatch(addPostActionCreator(text))

    let onPostChange = (text: string) => {
        let action: UpdateTestActionType = UpdateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />
}


export default MyPostsContainer;