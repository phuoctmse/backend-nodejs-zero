const connection = require("../config/database");
const User = require("../models/User");

const getAllUsers = async () => {
    const result = await User.find({})
    return result;
}

const getUserById = async (userId) => {
    const user = await User.findById(userId);
    return user;
}

const createUser = async (email, name, city) => {
    await User.create({ email: email, name: name, city: city });
}

const updateUser = async (id, email, name, city) => {
    let result = User.updateOne({ _id: id }, { email: email, name: name, city: city }).exec()
}

const deleteUser = async (userId) => {
    await User.findByIdAndDelete(userId);
}
module.exports = {
    getAllUsers, getUserById, createUser, updateUser, deleteUser
}