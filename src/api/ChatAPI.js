import axiosClient from "./axiosClient";

const ChatAPI = {
    getList: (query) => {
        const url = `/chat/list${query}`
        return axiosClient.get(url)
    },
    getRoom: (query) => {
        const url = `/chat/room${query}`
        return axiosClient.get(url)
    },
    getUser: (query) => {
        const url = `/chat/user${query}`
        return axiosClient.get(url)
    },
}

export default ChatAPI