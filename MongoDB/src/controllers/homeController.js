const connection = require('../config/database');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../services/CRUDService');
const User = require('../models/User');


const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results }) // x <- y
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email = ", email, ' name = ', name, ' city = ', city)

    await createUser(email, name, city);

    res.send(' Created user succeed !')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', { userEdit: user }); //x <- y
}
const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUser(userId, email, name, city);

    // res.send(' Updated user succeed !')  
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;

    await deleteUser(id);

    res.redirect('/');
}
module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser,
    postHandleRemoveUser
}