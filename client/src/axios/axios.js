const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://morgshop-cms-server.herokuapp.com'
})

module.exports = instance
