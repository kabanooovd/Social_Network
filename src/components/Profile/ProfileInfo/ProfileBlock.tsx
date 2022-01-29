import React from "react";
import { ProfileType } from "../../../redux/profileReducer";
import { Contacts } from "./Contacts";

export const ProfileBlock = (props: {
	profile: ProfileType;
	isOwner: boolean;
	setEditProfile: (editProfile: boolean) => void;
}) => {
	const goToEditMode = () => props.setEditProfile(true);
	return (
		<div>
			{props.isOwner && <button onClick={goToEditMode}>Edit Profile</button>}
			<div>
				<b>Full Name:</b> {props.profile.fullName}
			</div>
			<div>
				<b>Looking for a job:</b> {props.profile.lookingForAJob ? "YES" : "NO"}
			</div>
			{props.profile.lookingForAJob && (
				<div>
					<b>Discription:</b>
					{props.profile.lookingForAJobDescription}
				</div>
			)}
			<div>
				<b>About me:</b>{" "}
				{props.profile.aboutMe ? props.profile.aboutMe : "No data"}
			</div>
			<div>
				<b>Contacts: </b>
				<Contacts contacts={props.profile.contacts} />
			</div>
		</div>
	);
};
