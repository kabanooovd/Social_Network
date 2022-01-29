import React from "react";

export const UpdateContacts = ({
	fieldName,
	fieldHandler,
	fieldTitle,
}: {
	fieldName: string;
	fieldHandler: (fieldName: string) => void;
	fieldTitle: string;
}) => {
	return (
		<div>
			<span>{fieldTitle}</span>
			<input
				id={fieldName}
				name={fieldName}
				value={fieldName}
				onChange={(e) => {
					fieldHandler(e.currentTarget.value);
				}}
			/>
		</div>
	);
};
