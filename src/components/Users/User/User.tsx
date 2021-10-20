import React from "react";
import s from "../Users.module.css";
import {NavLink} from "react-router-dom";
import user from "../../../assets/user.png";
import {UsersType} from "../Users";

export type User_T = {
    user: UsersType
    followingInProgress: number[]
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
}

export const User = (props: User_T) => {

    return (
        <div>
                    <span>
                        <div className={s.photoURL}>
                            <NavLink to={'/profile/' + props.user.id}>
                                <img src={props.user.photos.small != null ? props.user.photos.small : user}
                                     className={s.photoURLStyle}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                !props.user.followed
                                    ? <button onClick={() => props.followTC(props.user.id)}
                                              disabled={props.followingInProgress.some(el => el === props.user.id)}>Follow</button>
                                    : <button onClick={() => props.unfollowTC(props.user.id)}
                                              disabled={props.followingInProgress.some(el => el === props.user.id)}>Un
                                        Follow</button>
                            }
                        </div>
                    </span>
                     <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status ? props.user.status : 'no status'}</div>
                        </span>
                        <span>
                            {/*<div>{'u.location.country'}</div>*/}
                            {/*<div>{'u.location.city'}</div>*/}
                        </span>
                    </span>
        </div>
    )
}









