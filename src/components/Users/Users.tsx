import React from "react";
import s from "./Users.module.css";
import user from "../../assets/user.png";
import {LocationType} from "../../redux/usersReducer";

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

                    const ToFollowBtnHandler = () => props.follow(u.id)
                    const ToUnFollowBtnHandler = () => props.unfollow(u.id)

                    return (
                        <div key={u.id}>

                    <span>
                        <div className={s.photoURL}>
                            <img className={s.photoURLStyle} src={u.photos.small != null ? u.photos : user}/>
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










