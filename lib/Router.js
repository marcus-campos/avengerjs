const path       = require('./../config/app')('middleware')
const express    = require('express')
const router     = express.Router()

const middlwares = require('./../config/middlewares')


for(let key in middlwares)
    router.use(require('./../' + path + '/' + middlwares[key]))

module.exports = router