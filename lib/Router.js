const express    = require('express')
const router     = express.Router()

const middlwares = require('./../config/middlewares')


for(let key in middlwares)
    router.use(require('./../app/Http/Middleware/' + middlwares[key]))

module.exports = router