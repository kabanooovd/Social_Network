import React from "react";
import {connect} from "react-redux";
import {
    followACSuccess, followingInProgressAC, followTC, getUsersThunkCreator,
    LocationType,
    setCurrentPageAC,
    unFollowACSuccess, unfollowTC,
    UsersReducerLocalStateType,
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {LoadingSpinner} from "../common/LoadingSpinner/LoadingSpinner";
import {usersAPI} from "../../api/api";

type UsersType = {
    id: number
    //photos: string
    photos: {small: string, large: string}
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
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    followTC: (userID: number) => void
    unfollowTC: (userID: number) => void
    setCurrentPageAC: (pageNumber: number) => void
    followingInProgressAC: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    // componentDidMount() {
    //     this.props.setIsFetching(true)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    //         withCredentials: true
    //     })
    //         .then(response => {
    //             this.props.setIsFetching(false)
    //             this.props.setUsers(response.data.items)
    //             this.props.setTotalUsersCount(response.data.totalCount)
    //         });
    // }
    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

        // getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

        // this.props.setIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //         this.props.setIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

        // this.props.setCurrentPageAC(pageNumber)
        // this.props.setIsFetchingAC(true)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        // //     withCredentials: true
        // // })
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.setIsFetchingAC(false)
        //         this.props.setUsersAC(data.items)
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <LoadingSpinner/> : null  }
            <Users totalCount={this.props.totalCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.usersPage.users}
                          followTC={this.props.followTC}
                          unfollowTC={this.props.unfollowTC}
                          // toggleFollowingProgress={this.props.followingInProgressAC}
                          followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    followTC, unfollowTC, setCurrentPageAC, followingInProgressAC, getUsersThunkCreator,
}) (UsersContainer)

