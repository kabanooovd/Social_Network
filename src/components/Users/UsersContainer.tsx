import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC,} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/ActionTipizationType";





const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users)


















