const express = require('express') //import express
const {getHomePage, getAboutPage, getEditPage, postCreateUser, getCreatePage
        ,getUserById
 } = require('../controllers/homeController')
const router = express.Router()

//router.Method('route',handler)
router.get('/', getHomePage)

router.get('/about', getAboutPage)

//with dynamic content route
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
router.get('/edit/:userId', getEditPage)


module.exports = router //export.default