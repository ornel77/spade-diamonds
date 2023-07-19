const db = require('../../config/database')


const findAll = async () => {
    const [shows] = await db.query('SELECT * FROM `show`')
    return shows
}

const findById = async (id) => {
    const [show] = await db.query('SELECT * FROM `show` WHERE id = ?', [id])
    return show
}

const addShow = async (show) => {
    const { date, time, venue, city } = show
    // const [newShow] = db.query('INSERT INTO `show` (data, time, venue, city) VALUES (?, ?, ?, ?)', [data, time, venue, city])
    // return {id: newShow.insertId, ...show}
    return db
        .query('INSERT INTO `show` (date, time, venue, city) VALUES (?, ?, ?, ?)', [date, time, venue, city])
        .then(([data]) => {
            return {id: data.insertId, ...show}
        })
}

const modifyShow = (show, showId) => {
    return db
        .query('UPDATE `show` SET ? WHERE id = ?', [show, showId])
        .then(([data]) => {
            return data
        })
}

const removeShow = async (id) => {
    const [data] = await db.query("DELETE FROM `show` WHERE id = ?", [id])
    return data
}

module.exports = { findAll, findById, addShow, modifyShow, removeShow }