const express = require('express');

const routerAPI = express.Router();

const { getUserApi, postUserApi } = require('../controllers/apiController')

routerAPI.get('/users', getUserApi);
routerAPI.post('/users', postUserApi);


module.exports = routerAPI; //export default
