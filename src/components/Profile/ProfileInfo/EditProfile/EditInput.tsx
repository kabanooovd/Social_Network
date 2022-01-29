import { FormikValues } from "formik";
import React from "react";

export const EditInput = ({
	formName,
	formik,
	formHeader,
	type,
	editContacts,
}: {
	formName: string;
	formik: FormikValues;
	formHeader?: string;
	type: string;
	editContacts?: boolean;
}) => {
	return (
		<div>
			<div>{formHeader}</div>
			{type !== "checkbox" && (
				<input id={formName} type={type} {...formik.getFieldProps(formName)} />
			)}
			{type === "checkbox" && (
				<input
					id={formName}
					type={type}
					checked={formik.values[formName]}
					{...formik.getFieldProps(formName)}
				/>
			)}
		</div>
	);
};
