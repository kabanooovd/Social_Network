import React from 'react';
import {addPostActionCreator, PostsType, UpdateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {UsersReducerLocalStateType} from "../../../redux/usersReducer";

type MapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

export type ProfilePageType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;