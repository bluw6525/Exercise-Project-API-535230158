const { User } = require('../../../models');
const { errorTypes } = require('../../../core/errors');
const { func } = require('joi');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Get user detail
 * @param {string} email - User email
 * @returns {Promise}
 */
async function getUserEmail(email) {
  return User.findOne({email})
}
/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  return User.create({
    name,
    email,
    password,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}
/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} password - Name
 * @param {string} newpassword - Email
 * @returns {Promise}
 */
async function patchUser(id, hashedPassword) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        password: hashedPassword,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
  getUserEmail,
};
