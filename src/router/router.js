const express = require('express')
const router = express.Router()

const { working } = require('../controller/userController')
router.route('/work').post(working)
module.exports = router