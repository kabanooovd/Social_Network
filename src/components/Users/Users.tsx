import React from "react";
import {LocationType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

export type UsersType = {
    id: number
    photos: { small: string, large: string }
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
    users: UsersType[]
    followTC: (id: number) => void
    unfollowTC: (id: number) => void
    followingInProgress: number[]
}

export const Users = (props: PresentUsersPropsType) => {

    return (
        <div>
            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           followTC={props.followTC}
                                           unfollowTC={props.unfollowTC}
                    />
                )
            }
        </div>
    )
}
