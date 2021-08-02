import axiosClient from "./axiosClient";

const ChatAPI = {
    getList: (query) => {
        const url = `/chat/list${query}`
        return axiosClient.get(url)
    }
}

export default ChatAPI