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
    },
    login: (body) => {
        const url = '/user/login'
        return axiosClient.post(url, body)
    },
    detail: (id) => {
        const url = `/user/${id}`
        return axiosClient.get(url)
    },
    fullname: (body) => {
        const url = '/user/fullname'
        return axiosClient.patch(url, body)
    },
    address: (body) => {
        const url = '/user/address'
        return axiosClient.patch(url, body)
    },
    about: (body) => {
        const url = '/user/about'
        return axiosClient.patch(url, body)
    },
    gender: (body) => {
        const url = '/user/gender'
        return axiosClient.patch(url, body)
    },
    media: (body) => {
        const url = '/user/media'
        return axiosClient.patch(url, body)
    },
    deleteMedia: (body) => {
        const url = '/user/delMedia'
        return axiosClient.patch(url, body)
    },
  
}

export default UserAPI