const User = require('../models/User');
const { getAllUsers, createUser, updateUser, deleteUser} = require('../services/CRUDService')

const getUserApi = async (req, res) => {
    const listUsers = await getAllUsers();
    return res.status(200).json(
        {
            errorCode: 0,
            data: listUsers
        }
    )
}

const postUserApi = async (req,res) => {
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;
    const user = await createUser(email, name, city);
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )
}

const putUserApi = async (req,res) => {
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;
    const id = req.body.userId
    const user = await updateUser(id, email, name , city);
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )
}

const deleteUserApi = async (req,res) => {
    const id = req.body.userId
    const user = await deleteUser(id);
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )
}

module.exports = {getUserApi, postUserApi, putUserApi, deleteUserApi}