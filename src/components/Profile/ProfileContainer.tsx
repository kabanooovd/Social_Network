import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ownPropsType

type MapStatePropsType = {
    profile: ProfileType
    status: string
    loggedUserID: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileTC: (getUserProfileTC: string) => void
    getStatusTC: (status: string) => void
    updateStatusTC: (status: string) => void

}
export type ownPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.loggedUserID
            // if (!userId) {
            //     this.props.history.push('/login')
            // }   ?????
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusTC={this.props.updateStatusTC}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUserID: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter
)(ProfileContainer)











