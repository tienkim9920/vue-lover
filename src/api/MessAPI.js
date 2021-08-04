import axiosClient from './axiosClient'

const MessAPI = {
    getRoom: (query) => {
        const url = `/message/room${query}`
        return axiosClient.get(url)
    }
}

export default MessAPI