const express = require('express')
const router = express.Router()


// /api routes
router.get('/', (req, res) => {
    res.send('In the /api routes, dude')
})

router.get('/candy', require ('./candy'))



//for all routes /api/candy, use the candy router
router.use('/candy', require('./candy'))

module.exports = router