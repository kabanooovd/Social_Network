import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([

            {id: 1,
                photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
                followed: true, fullName: 'Dimas', status: 'student', location: {city: 'FishBurg', country: 'RF'}},
            {id: 2,
                photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
                followed: false, fullName: 'Sashsa', status: 'worker', location: {city: 'Moscow', country: 'RF'}},
            {id: 3,
                photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
                followed: true, fullName: 'Masha', status: 'waitress', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 4,
                photoURL: 'https://im0-tub-ru.yandex.net/i?id=72a5389fde239442c135b79511a43758-l&ref=rim&n=13&w=1080&h=1080' ,
                followed: false, fullName: 'Pashsa', status: 'rocker', location: {city: 'Minsk', country: 'RB'}},

        ])
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => {

                    const ToFollowBtnHandler = () => props.follow(u.id)
                    const ToUnFollowBtnHandler = () => props.unfollow(u.id)

                    return (
                        <div key={u.id}>

                    <span>
                        <div className={s.photoURL}>
                            <img className={s.photoURLStyle} src={u.photoURL}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={ToFollowBtnHandler}>Follow</button>
                                    : <button onClick={ToUnFollowBtnHandler}>Un Follow</button>
                            }
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                        </div>
                    )
                })
            }
        </div>
    )
}
















