const db = require('../../config/database')


const findAll = async () => {
    const [musics] = await db.query('SELECT * FROM `music`')
    return musics
}

const findById = async (id) => {
    const [music] = await db.query('SELECT * FROM `music` WHERE id = ?', [id])
    return music
}

const addMusic =  (music, music_url) => {
    const { music_title } = music
    // const [newShow] = db.query('INSERT INTO `show` (data, time, venue, city) VALUES (?, ?, ?, ?)', [data, time, venue, city])
    // return {id: newShow.insertId, ...show}
    return db
        .query('INSERT INTO `music` (music_title, music_url) VALUES (?, ?)', [music_title, music_url])
        .then(([data]) => {
            return {id: data.insertId, ...music, music_url}
        })
}

const modifyMusic = (music,music_url, musicId) => {
    const { music_title } = music

    return db
        .query('UPDATE `music` SET music_title = ?, music_url = ? WHERE id = ?', [music_title, music_url, musicId])
        .then(([data]) => {
            return data
        })
}

const removeMusic = async (id) => {
    const [data] = await db.query("DELETE FROM `music` WHERE id = ?", [id])
    return data
}

module.exports = { findAll, findById, addMusic, modifyMusic, removeMusic }