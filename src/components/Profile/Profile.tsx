import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileContainerPropsType } from "./ProfileContainer";
import { ProfileType } from "../../redux/profileReducer";

type ProfilePropsType = ProfileContainerPropsType;

const Profile = (
	props: ProfilePropsType & {
		isOwner: boolean;
		savePhotoTC: (file: File) => void;
		saveProfileTC: (data: ProfileType) => void;
	}
) => {
	return (
		<div className={s.content}>
			<ProfileInfo
				savePhotoTC={props.savePhotoTC}
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatusTC={props.updateStatusTC}
				saveProfileTC={props.saveProfileTC}
			/>
			<div className={s.mainInfo}>
				<MyPostsContainer />
			</div>
		</div>
	);
};

export default Profile;
