const express = require('express') //import express
const {getHomePage, getAboutPage, getEditPage, getCreatePage} 
        = require('../controllers/homeController')
const {postEditUser, postCreateUser} = require('../services/CRUDService')
const router = express.Router()

//router.Method('route',handler)
router.get('/', getHomePage)

router.get('/about', getAboutPage)

//with dynamic content route
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
router.get('/edit/:userId', getEditPage)
router.post('/edit-user', postEditUser)


module.exports = router //export.default