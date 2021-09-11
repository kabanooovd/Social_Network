import React from "react";
import {connect} from "react-redux";
import {
    followingInProgressAC, followTC, getUsersThunkCreator,
    setCurrentPageAC, unfollowTC, UsersReducerLocalStateType,
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {LoadingSpinner} from "../common/LoadingSpinner/LoadingSpinner";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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

let AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    followTC, unfollowTC, setCurrentPageAC, followingInProgressAC, getUsersThunkCreator,
}) (AuthRedirectComponent)

