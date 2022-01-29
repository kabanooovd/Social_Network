import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
	getStatusTC,
	getUserProfileTC,
	ProfileType,
	updateStatusTC,
	savePhotoTC,
	saveProfileTC,
} from "../../redux/profileReducer";
import { AppStateType } from "../../redux/redux-store";
import { withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
	userId: string;
};

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
	ownPropsType;

type MapStatePropsType = {
	profile: ProfileType;
	status: string;
	loggedUserID: number;
	isAuth: boolean;
};
type MapDispatchPropsType = {
	getUserProfileTC: (getUserProfileTC: string) => void;
	getStatusTC: (status: string) => void;
	updateStatusTC: (status: string) => void;
	savePhotoTC: (file: File) => void;
	saveProfileTC: (data: ProfileType) => void;
};
export type ownPropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = String(this.props.loggedUserID);
		}
		this.props.getUserProfileTC(userId);
		this.props.getStatusTC(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps: any, prevState: any, snapShot: any) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}
	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatusTC={this.props.updateStatusTC}
				isOwner={
					this.props.match.params.userId === String(this.props.loggedUserID)
				}
				savePhotoTC={this.props.savePhotoTC}
				saveProfileTC={this.props.saveProfileTC}
			/>
		);
	}
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	loggedUserID: +state.auth.id,
	isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
	withAuthRedirect,
	connect(mapStateToProps, {
		getUserProfileTC,
		getStatusTC,
		updateStatusTC,
		savePhotoTC,
		saveProfileTC,
	}),
	withRouter
)(ProfileContainer);
