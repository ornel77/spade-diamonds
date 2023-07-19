const { findAll, findById, findByMail } = require('./model')


const getAll = async (req, res) => {
    try {
        const members = await findAll()
        res.status(200).json('members')
        console.log(members);
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

const getOne = async (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    if (isNaN(id)) {
        res.status(400).json({ message: "wrong id type (getOne) !" });
      }
    try {
        const [member] = await findById(id)
        console.log(member);
        res.status(200).json(member)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}



module.exports = { getAll, getOne }