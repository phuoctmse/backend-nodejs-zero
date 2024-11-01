const express = require('express');

const routerAPI = express.Router();

const { getUserApi } = require('../controllers/apiController')

routerAPI.get('/', (req, res) => {
    res.send(" hello world with apis")
});

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'hello world first apis'
    })
});

routerAPI.get('/users', getUserApi);


module.exports = routerAPI; //export default
