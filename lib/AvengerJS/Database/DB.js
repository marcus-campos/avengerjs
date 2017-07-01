// Database requires and configuration

const knex = require('knex')(rootRequire('config/db'))
const bookshelf = require('bookshelf')(knex)

module.exports = bookshelf;