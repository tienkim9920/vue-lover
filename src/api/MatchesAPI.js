import axiosClient from './axiosClient'

const MatchesAPI = {

    createObject: (body) => {
        const url = '/matches'
        return axiosClient.post(url, body)
    },

    listObject: (query) => {
        const url = `/matches/list${query}`
        return axiosClient.get(url)
    },

    like: (body) => {
        const url = '/matches/like'
        return axiosClient.patch(url, body)
    },

    supper: (body) => {
        const url = '/matches/supper'
        return axiosClient.patch(url, body)
    },

    unlike: (body) => {
        const url = '/matches/unlike'
        return axiosClient.patch(url, body)
    }

}

export default MatchesAPI