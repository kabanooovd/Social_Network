import React from "react";
import { ContactsForProfileType } from "../../../redux/profileReducer";

export const Contacts = ({ contacts }: { contacts: any }) => {
	return (
		<div style={{ margin: "15px" }}>
			{Object.keys(contacts).map((c, index) => {
				return (
					<div key={index}>
						{c && (
							<a href={contacts[c]} target="blanc">
								{c}
							</a>
						)}
					</div>
				);
			})}
		</div>
	);
};
