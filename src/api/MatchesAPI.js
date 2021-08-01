import axiosClient from './axiosClient'

const MatchesAPI = {

    createObject: (body) => {
        const url = '/matches'
        return axiosClient.post(url, body)
    },

    listObject: (query) => {
        const url = `/matches/list${query}`
        return axiosClient.get(url)
    }

}

export default MatchesAPI