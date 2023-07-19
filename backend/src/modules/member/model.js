const db = require('../../config/database')

const findAll = async () => {
    const [members] = await db.query('SELECT * FROM `member`')
    return members
}

const findByMail = async (email) => {
    const [member] = await db.query('SELECT * FROM `member` WHERE email = ?', [email])
    return member
}

const findById = async (id) => {
    const [member] = await db.query('SELECT * FROM `member` WHERE id = ?', [id])
    return member
}

module.exports = { findAll, findByMail, findById }