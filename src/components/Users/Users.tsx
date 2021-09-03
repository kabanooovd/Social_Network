import React from "react";
import s from "./Users.module.css";
import user from "../../assets/user.png";
import {LocationType} from "../../redux/usersReducer";
import { NavLink } from "react-router-dom";

type UsersType = {
    id: number
    photos: {small: string, large: string}
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
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
}

export const Users = (props: PresentUsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    console.log(props.currentPage)

    return (
        <div>
            <div>
                {pages.map((el, index) => {
                    return (
                        <span key={index}
                              className={props.currentPage === el ? s.selectedPage : ''}
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
                        props.followTC(u.id)
                    }
                    const ToUnFollowBtnHandler = () => {
                        props.unfollowTC(u.id)
                    }
                    return (
                        <div key={u.id}>

                    <span>
                        <div className={s.photoURL}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : user} className={s.photoURLStyle} />
                            </NavLink>
                        </div>
                        <div>
                            {
                                !u.followed
                                    ? <button onClick={ToFollowBtnHandler} disabled={props.followingInProgress.some(el => el === u.id)}>Follow</button>
                                    : <button onClick={ToUnFollowBtnHandler} disabled={props.followingInProgress.some(el => el === u.id)}>Un Follow</button>
                            }
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status ? u.status : 'no status'}</div>
                        </span>
                        <span>
                            {/*<div>{'u.location.country'}</div>*/}
                            {/*<div>{'u.location.city'}</div>*/}
                        </span>
                    </span>
                        </div>
                    )
                })
            }
        </div>
    )
}










