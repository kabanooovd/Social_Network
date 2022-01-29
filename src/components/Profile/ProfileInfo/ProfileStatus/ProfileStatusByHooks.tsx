import React, { useEffect, useState } from "react";

type ProfileStatusT = {
	status: string;
	updateStatusTC: (status: string) => void;
};

export const ProfileStatusByHooks = (props: ProfileStatusT) => {
	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const [editMode, setEditMode] = useState<boolean>(false);
	const [status, setStatus] = useState<string>(props.status);

	const turnOnInput = () => {
		setEditMode(true);
	};
	const turnOnSpan = () => {
		setEditMode(false);
		props.updateStatusTC(status);
	};
	const changeStatusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			<b>Status: </b>
			{!editMode ? (
				<span onDoubleClick={turnOnInput}>{props.status || "no status"}</span>
			) : (
				<input
					type="text"
					value={status}
					onBlur={turnOnSpan}
					autoFocus={true}
					onChange={changeStatusHandler}
				/>
			)}
		</div>
	);
};
