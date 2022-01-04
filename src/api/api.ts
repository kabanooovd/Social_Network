import axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "5c9db236-bce8-43d4-9dbe-11cf80cb43d0",
	},
});

export const usersAPI = {
	getUsers(currentPage: number = 1, pageSize: number = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`);
	},
	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`);
	},
	getProfile(userId: string) {
		console.warn("Obsolete method. Please, reuse profileAPI object");
		return profileAPI.getProfile(userId);
	},
};

export const authAPI = {
	me() {
		return instance.get("auth/me");
	},
	login(data: loginRequestData_T) {
		return instance.post<CommonRequest_T<{ userId: number }>>(
			`/auth/login`,
			data
		);
	},
	logout() {
		return instance.delete<CommonRequest_T<{}>>(`/auth/login`);
	},
};

export const profileAPI = {
	getProfile(userId: string) {
		return instance.get(`profile/${userId}`);
	},
	getStatus(userId: string) {
		return instance.get(`profile/status/${userId}`);
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, { status: status });
	},
	savePhoto(file: File) {
		const formData = new FormData();
		formData.append("image", file);
		return instance.put(`profile/photo`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	},
};

type CommonRequest_T<T> = {
	resultCode: number;
	messages: string[];
	data: T;
};

type loginRequestData_T = {
	email: string;
	password: string;
	rememberMe: boolean;
	captcha?: boolean;
};
