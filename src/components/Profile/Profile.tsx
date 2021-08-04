import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePagePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <div className={s.mainInfo}>
                <MyPostsContainer

                />
            </div>
        </div>
    )
}


export default Profile;