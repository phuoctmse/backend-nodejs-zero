const express = require('express') //import express
const {getHomePage, getAboutPage, getDetailPage } = require('../controllers/homeController')
const router = express.Router()

//router.Method('route',handler)
router.get('/', getHomePage)

router.get('/about', getAboutPage)

//with dynamic content route
router.get('/detail', getDetailPage)


module.exports = router //export.default