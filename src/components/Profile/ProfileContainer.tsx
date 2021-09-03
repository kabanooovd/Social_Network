import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & ownPropsType

type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileTC: (getUserProfileTC: string) => void
}
export type ownPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // userId = '2';
            userId = '18955';
        }
        this.props.getUserProfileTC(userId)
        // usersAPI.getProfile(userId).then(response => {
        //         this.props.setUserProfile(response.data)
        //     });

    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent);














