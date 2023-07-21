import api from './api';

const getMusics = async () => {
    return api.get('/musics')
}

const getOneMusic = async (id) => {
    return api.get(`/musics/${id}`)
}

const postMusic = async (data) => {
    return api.post('/musics', data)
}

const putMusic = async (id, data) => {
    return api.put(`/musics/${id}`,data)
}

const removeMusic = async (id) => {
    return api.delete(`/musics/${id}`)
}

export { getMusics, getOneMusic, postMusic, putMusic, removeMusic }