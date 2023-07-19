const router = require('express').Router()

const { getAll, getOne } = require("./controller")

router.get('/', getAll)
router.get('/:id', getOne)

module.exports = router;