const express = require('express')
const candyRouter = express.Router()
const { getAllCandy} = require('../db/candy')


// /api/candy routes
candyRouter.get('/', async (req, res) => {
   try{

    const candy = await getAllCandy()

    res.send(candy)
   }catch (err){
    next(err) 
   }
})

module.exports = candyRouter