import React from "react";

export const Captcha = ({ captchaUrl }: { captchaUrl: string }) => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<img src={captchaUrl} style={{ width: "130px" }} />
		</div>
	);
};
