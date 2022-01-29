import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { ProfileStatusByHooks } from "./ProfileStatus/ProfileStatusByHooks";
import userPhoto from "../../../assets/user.png";
import { ProfileType } from "../../../redux/profileReducer";
import { Contacts } from "./Contacts";
import { ProfileBlock } from "./ProfileBlock";
import { EditProfileBlock } from "./EditProfile/EditProfileBlock";

type ProfileInfoPropsType = {
	profile: ProfileType;
	updateStatusTC: (status: string) => void;
	status: string;
	isOwner: boolean;
	savePhotoTC: (file: File) => void;
	saveProfileTC: (data: ProfileType) => void;
};

const ProfileInfo = (props: ProfileInfoPropsType) => {
	const [editProfile, setEditProfile] = React.useState(false);

	const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			props.savePhotoTC(e.target.files[0]);
		}
	};

	return (
		<div>
			<div className={s.profileImg}>
				<img src="http://s3.fotokto.ru/photo/full/319/3199886.jpg" alt="" />
			</div>
			<div className={s.profilePerson}>
				<img
					src={props.profile.photos.large || userPhoto}
					className={s.userAva}
				/>
				<input type={"file"} onChange={onMainPhotoSelected} />
				{props.profile.fullName}
				{!editProfile ? (
					<ProfileBlock
						profile={props.profile}
						isOwner={props.isOwner}
						setEditProfile={setEditProfile}
					/>
				) : (
					<EditProfileBlock
						profile={props.profile}
						setEditProfile={setEditProfile}
						saveProfileTC={props.saveProfileTC}
					/>
				)}
				<ProfileStatusByHooks
					status={props.status}
					updateStatusTC={props.updateStatusTC}
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
