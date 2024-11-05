const express = require('express');

const routerAPI = express.Router();

const { getUserApi, postUserApi, putUserApi, deleteUserApi } = require('../controllers/apiController')

routerAPI.get('/users', getUserApi);
routerAPI.post('/users', postUserApi);
routerAPI.put('/users', putUserApi);
routerAPI.delete('/users',deleteUserApi)


module.exports = routerAPI; //export default
