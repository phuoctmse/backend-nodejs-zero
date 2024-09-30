const connection = require('../config/database')

const getHomePage = (req, res) => {
    //process data 
    //call model
    connection.query('select * from Users', (err, results, field) => {
        console.log(results)
      })
    res.send('Hello World! with nodemon')
}

const getAboutPage = (req, res) => {
    res.send('This is About Page')
}

const getDetailPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage
}