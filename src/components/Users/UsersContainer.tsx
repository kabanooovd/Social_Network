import React from "react";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, LocationType, setUsersAC, unFollowAC, UsersReducerLocalStateType,} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";

type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type MapStateToPropsType = {
    usersPage: UsersReducerLocalStateType
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch ): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users)


















