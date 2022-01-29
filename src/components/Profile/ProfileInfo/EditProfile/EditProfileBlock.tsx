import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ProfileType } from "../../../../redux/profileReducer";
import { AppStateType } from "../../../../redux/redux-store";
import { EditInput } from "./EditInput";
import { UpdateContacts } from "./UpdateContacts";

export const EditProfileBlock = (props: {
	profile: ProfileType;
	setEditProfile: (editProfile: boolean) => void;
	saveProfileTC: (data: ProfileType) => void;
}) => {
	const userId = useSelector<AppStateType, string>((state) => state.auth.id);

	const [fb, setFb] = React.useState<string>(props.profile.contacts.facebook);
	const [vk, setVk] = React.useState<string>(props.profile.contacts.vk);
	const [gh, setGh] = React.useState<string>(props.profile.contacts.github);
	const [insta, setInsta] = React.useState<string>(
		props.profile.contacts.instagram
	);
	const [twtr, setTwtr] = React.useState<string>(
		props.profile.contacts.twitter
	);
	const [ws, setWs] = React.useState<string>(props.profile.contacts.website);
	const [yt, setYt] = React.useState<string>(props.profile.contacts.youtube);
	const [ml, setMl] = React.useState<string>(props.profile.contacts.mainLink);

	const formik = useFormik<ProfileType>({
		initialValues: {
			userId: +userId,
			fullName: props.profile.fullName,
			lookingForAJob: props.profile.lookingForAJob,
			lookingForAJobDescription: props.profile.lookingForAJobDescription,
			aboutMe: props.profile.aboutMe,
			contacts: {
				github: gh,
				vk: vk,
				facebook: fb,
				instagram: insta,
				twitter: twtr,
				website: ws,
				youtube: yt,
				mainLink: ml,
			},
			photos: props.profile.photos,
		},
		validate: () => {},
		onSubmit: (values) => {
			props.setEditProfile(false);
			props.saveProfileTC(values);
		},
		enableReinitialize: true,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<button type="submit">Save Changes</button>
			<div
				style={{
					margin: "20px",
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<div>
					<b>Main Data</b>
					<div>
						<EditInput
							formName={"fullName"}
							formHeader={"Full Name: "}
							formik={formik}
							type={"text"}
						/>
					</div>
					<div>
						<EditInput
							formName={"lookingForAJob"}
							formHeader={"Looking for a job: "}
							formik={formik}
							type={"checkbox"}
						/>
					</div>
					{formik.values.lookingForAJob && (
						<div>
							<EditInput
								formName={"lookingForAJobDescription"}
								formHeader={"Discription: "}
								formik={formik}
								type={"text"}
							/>
						</div>
					)}
					<div>
						<EditInput
							formName={"aboutMe"}
							formHeader={"About Me: "}
							formik={formik}
							type={"text"}
						/>
					</div>
				</div>
				<div>
					<UpdateContacts
						fieldTitle={"GitHub : "}
						fieldName={gh}
						fieldHandler={setGh}
					/>
					<UpdateContacts
						fieldTitle={"FaceBook : "}
						fieldName={fb}
						fieldHandler={setFb}
					/>
					<UpdateContacts
						fieldTitle={"VK : "}
						fieldName={vk}
						fieldHandler={setVk}
					/>
					<UpdateContacts
						fieldTitle={"Main Link : "}
						fieldName={ml}
						fieldHandler={setMl}
					/>

					<UpdateContacts
						fieldTitle={"Twitter : "}
						fieldName={twtr}
						fieldHandler={setTwtr}
					/>
					<UpdateContacts
						fieldTitle={"Web Site : "}
						fieldName={ws}
						fieldHandler={setWs}
					/>
					<UpdateContacts
						fieldTitle={"Youtube : "}
						fieldName={yt}
						fieldHandler={setYt}
					/>
					<UpdateContacts
						fieldTitle={"Instagram : "}
						fieldName={insta}
						fieldHandler={setInsta}
					/>
				</div>
			</div>
		</form>
	);
};
