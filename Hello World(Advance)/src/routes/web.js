const express = require('express') //import express
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! with nodemon')
})

router.get('/abc', (req, res) => {
    res.send('Hello World with abc')
})

//with dynamic content route
router.get('/me', (req, res) => {
    // res.send('<h1>Hello World with me</h1>')
    res.render('sample.ejs')
})


module.exports = router