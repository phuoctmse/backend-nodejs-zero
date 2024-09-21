const express = require('express') //import express
const path = require('path') //import path module
const app = express() // tạo express application
require('dotenv').config() //import dotenv module
const port = process.env.PORT || 8888// nếu mà không có port thì mặc định là 8888
const hostname = process.env.HOST_NAME


//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
  res.send('Hello World! with nodemon')
})

app.get('/abc', (req, res) => {
  res.send('Hello World with abc')
})

//with dynamic content route
app.get('/me', (req, res) => {
  // res.send('<h1>Hello World with me</h1>')
  res.render('sample.ejs')
})

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
