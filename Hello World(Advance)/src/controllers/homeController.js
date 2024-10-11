const express = require('express')
const connection = require('../config/database')
const {getAllUsers, getUserById} = require('../services/CRUDService')

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

const getEditPage = async (req, res) => {
    const userId = req.params.userId
    let user = await getUserById(userId)
    res.render('edit.ejs', {userEdit: user})
}




module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage,
    getCreatePage,
    getEditPage,
}