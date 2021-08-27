import React from "react";
import s from "./Users.module.css";
import user from "../../assets/user.png";
import {LocationType} from "../../redux/usersReducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type PresentUsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users:UsersType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users = (props: PresentUsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(el => {
                    return (
                        <span className={props.currentPage === el ? s.selectedPage : ''}
                              onClick={(e) => {
                                  props.onPageChanged(el)
                              }}
                        >{" " + el + " "}</span>
                    )
                })}
            </div>
            {
                props.users.map(u => {
                    const ToFollowBtnHandler = () => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "7121752a-cd45-46e5-a73c-32630b1d9cc6"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            });
                    }
                    const ToUnFollowBtnHandler = () => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "7121752a-cd45-46e5-a73c-32630b1d9cc6"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            });
                    }
                    return (
                        <div key={u.id}>

                    <span>
                        <div className={s.photoURL}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.photoURLStyle} src={u.photos.small != null ? u.photos : user}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                !u.followed
                                    ? <button onClick={ToFollowBtnHandler}>Follow</button>
                                    : <button onClick={ToUnFollowBtnHandler}>Un Follow</button>
                            }
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                        </div>
                    )
                })
            }
        </div>
    )
}










