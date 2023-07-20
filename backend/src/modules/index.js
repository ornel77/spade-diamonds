const router = require("express").Router()

const memberRouter = require('./member')
// const photoRouter = require('./photo')
const showRouter = require('./show')
const musicRouter = require('./music')
// const videoRouter = require('./video')

router.use('/api/members', memberRouter)
// router.use('/api/photos', photoRouter)
router.use('/api/shows', showRouter)
router.use('/api/musics', musicRouter)
// router.use('/api/videos', videoRouter)

module.exports = router;
