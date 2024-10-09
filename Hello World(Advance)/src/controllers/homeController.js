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

const getEditPage = (req, res) => {
    const userId = req.params.userId
    console.log(req.params, userId)
    res.render('edit.ejs')
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
    getEditPage
}