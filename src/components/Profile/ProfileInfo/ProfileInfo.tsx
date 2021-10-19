import React from 'react';
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileStatusByHooks} from "./ProfileStatus/ProfileStatusByHooks";

type ProfileType = {
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

type ProfileInfoPropsType = {
    profile: ProfileType
    updateStatusTC: (status: string) => void
    status: string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div className={s.profileImg}>
                {/*<img src='http://s3.fotokto.ru/photo/full/319/3199886.jpg' alt=""/>*/}
            </div>
            <div className={s.profilePerson}>
                <img src={props.profile.photos.small} className={s.userAva} />
                {/*ava + description*/}
                {props.profile.fullName}
                {/*<ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>*/}
                <ProfileStatusByHooks status={props.status} updateStatusTC={props.updateStatusTC} />
            </div>
        </div>
    )
}

export default ProfileInfo