require('dotenv').config() //import dotenv module
const express = require('express') //import express

const app = express() // tạo express application
const configViewEngine = require('./config/viewEngine')

const webRoutes = require('./routes/web')
const port = process.env.PORT || 8888// nếu mà không có port thì mặc định là 8888
const hostname = process.env.HOST_NAME
const mysql2 = require('mysql2')


//config template engine
configViewEngine(app)


//khai báo routes
app.use('/', webRoutes)

//test connection
const connection = mysql2.createConnection({
  host:'localhost',
  port: 3307,
  user:'root',
  password:'123456',
  database:'hoidanit'
})

connection.query('select * from Users', (err, results, field) => {
  console.log(results)
})
//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
