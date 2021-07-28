import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {AddPostActionType, PostsType, UpdateTestActionType} from "../../redux/state";

type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
    dispatch: (action: AddPostActionType | UpdateTestActionType) => void
    //updateNewPostText: (text: string) => void
}

const Profile = (props: ProfilePageType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <div className={s.mainInfo}>
                <MyPosts posts={props.posts}
                         //addPost={props.addPost}
                         newPostText={props.newPostText}
                         dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}


export default Profile;