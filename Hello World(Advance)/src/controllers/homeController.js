const express = require('express')
const connection = require('../config/database')
const {getAllUsers} = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    let result = await getAllUsers()
    return res.render('home.ejs', {listUsers: result} )
}

const getAboutPage = (req, res) => {
    res.send('This is About Page')
}

const getDetailPage = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ? ', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;

}

const getEditPage = async (req, res) => {
    const userId = req.params.userId
    let user = await getUserById(userId)
    res.render('edit.ejs', {userEdit: user})
}

const postCreateUser = async (req, res) => {
   
    // connection.query(
    //     `INSERT INTO Users ( email , name ,city ) 
    //     VALUES (?,?,?)`
    //     , [email, name, city],  function(err, results) {
    //         res.send(' Created user succeed !')
    //       }

    // )
    let {email, name, city } = req.body
    let [result, field] = await connection.query(
        `INSERT INTO Users ( email , name ,city ) 
        VALUES (?,?,?)`, [email, name, city]
    )
    res.send(' Created user succeed !')
}
module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage,
    postCreateUser,
    getCreatePage,
    getEditPage,
    getUserById
}