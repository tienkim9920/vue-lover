import axiosClient from './axiosClient'

const MatchesAPI = {

    createObject: (body) => {
        const url = '/matches'
        return axiosClient.post(url, body)
    }

}

export default MatchesAPI