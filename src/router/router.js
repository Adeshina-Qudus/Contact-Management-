const express = require('express')
const router = express.Router()

const { working,register } = require('../controller/userController')
router.route('/work').post(working)
router.route('/register').post(register)
module.exports = router