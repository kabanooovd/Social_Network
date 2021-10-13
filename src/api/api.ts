import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "5c9db236-bce8-43d4-9dbe-11cf80cb43d0"
    }

})

export const usersAPI =     {
    getUsers(currentPage: number = 1 , pageSize: number = 10 ) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please, reuse profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

export const profileAPI =     {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }

}





