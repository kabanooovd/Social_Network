import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileImg}>
                <img src='http://s3.fotokto.ru/photo/full/319/3199886.jpg' alt=""/>
            </div>
            <div className={s.profilePerson}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo