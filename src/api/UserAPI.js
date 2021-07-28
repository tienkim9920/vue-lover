import axiosClient from "./axiosClient";

const UserAPI = {
    listUser: () => {
        const url = '/user'
        return axiosClient.get(url)
    },
    addUser: (body) => {
        const url = '/user'
        return axiosClient.post(url, body)
    },
    facebook: (body) => {
        const url = '/user/facebook'
        return axiosClient.post(url, body)
    }
}

export default UserAPI