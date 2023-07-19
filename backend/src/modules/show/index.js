const router = require('express').Router()

const { getAllShows, getOne, postShow, updateShow, deleteShow } = require("./controller")

router.get('/', getAllShows)
router.get('/:id', getOne)
router.post('/', postShow)
router.put('/:id', updateShow)
router.delete('/:id', deleteShow)

module.exports = router;