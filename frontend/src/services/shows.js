import api from './api';

const getShows = async () => {
    return api.get('/shows')
}

const postShow = async (data) => {
    return api.post('/shows', data)
}

const updateShows = async (id) => {
    return api.put(`/shows/${id}`)
}

export { getShows, postShow, updateShows }