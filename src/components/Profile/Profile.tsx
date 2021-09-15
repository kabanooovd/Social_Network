import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = ProfileContainerPropsType

const Profile = (props: ProfilePropsType) => {


    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
            <div className={s.mainInfo}>
                <MyPostsContainer

                />
            </div>
        </div>
    )
}


export default Profile;