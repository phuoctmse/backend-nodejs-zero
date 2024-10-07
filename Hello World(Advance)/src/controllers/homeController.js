const express = require('express')
const connection = require('../config/database')

const getHomePage = (req, res) => {
    return res.render('home.ejs')
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
    getCreatePage
}