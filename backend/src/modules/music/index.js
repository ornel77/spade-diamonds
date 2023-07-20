const router = require('express').Router()

const { getAll, getOne, postMusic, updateMusic, deleteMusic } = require("./controller")
const upload = require('../../middleware/fileUpload')

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', upload.any('music'),postMusic)
router.put('/:id', upload.any('music'),updateMusic)
router.delete('/:id', deleteMusic)

module.exports = router;