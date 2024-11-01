const { getAllUsers} = require('../services/CRUDService')

const getUserApi = async (req, res) => {
    const listUsers = await getAllUsers();
    return res.status(200).json(
        {
            errorCode: 0,
            data: listUsers
        }
    )

}

module.exports = {getUserApi}