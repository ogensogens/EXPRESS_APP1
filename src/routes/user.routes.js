const express = require('express')
const router = express.Router()
const { getApiController, } = require('../controllers/user.controllers')

router.get('/api/v1/dad-jokes', getApiController )
module.exports = {router}