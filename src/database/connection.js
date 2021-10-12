const knex = require('knex')
const configuration = require('../../knexfile.js')

const config = configuration.development

const connection=knex(config)

module.exports = connection
