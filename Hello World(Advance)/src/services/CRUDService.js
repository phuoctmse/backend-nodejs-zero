const connection = require('../config/database')

const getAllUsers = async () => {
    let [result, field] = await connection.query('select * from Users')
    return result
}

const postEditUser = async (req, res) => {
    let {email, name, city, userId } = req.body
    let [result, field] = await connection.query(
    'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',[email, name, city, userId])
    console.log(email, name, city, userId)
    res.redirect('/')
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
    res.redirect('/')
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ? ', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const DeleteUser = async (userId) => {
    let [result, field] = await connection.query('DELETE FROM Users WHERE id = ?',[userId])
}

module.exports = {
    getAllUsers, postEditUser, postCreateUser, getUserById, DeleteUser
}