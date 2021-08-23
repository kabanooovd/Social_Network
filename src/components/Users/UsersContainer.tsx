import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    LocationType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersReducerLocalStateType,
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";

type UsersType = {
    id: number
    photos: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type MapStateToPropsType = {
    usersPage: UsersReducerLocalStateType
    pageSize: number
    totalCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.usersPage.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)


















