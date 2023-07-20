import api from './api';

const getShows = async () => {
    return api.get('/shows')
}

const getOneShow = async (id) => {
    return api.get(`/shows/${id}`)
}

const postShow = async (data) => {
    return api.post('/shows', data)
}

const putShow = async (id, data) => {
    return api.put(`/shows/${id}`,data)
}

const removeShow = async (id) => {
    return api.delete(`/shows/${id}`)
}

export { getShows, getOneShow, postShow, putShow, removeShow }