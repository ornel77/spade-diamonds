const router = require('express').Router()

const { getAll, getOne, postMusic,updateMusic, deleteMusic } = require("./controller")
const upload = require('../../middleware/fileUpload')

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', upload.any(),postMusic)
router.put('/:id', upload.any(), updateMusic)
router.delete('/:id', deleteMusic)

module.exports = router;