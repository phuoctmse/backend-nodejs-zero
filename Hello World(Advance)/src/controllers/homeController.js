const getHomePage = (req, res) => {
    //process data 
    //call model
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