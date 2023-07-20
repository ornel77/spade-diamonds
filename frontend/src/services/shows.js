import api from './api';

const getShows = async () => {
    return api.get('/shows')
}

export { getShows }