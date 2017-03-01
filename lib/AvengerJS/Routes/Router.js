const path       = rootRequire('config/app')('middleware') + '/'
const express    = require('express')
const router     = new express.Router()

const middleware = rootRequire('config/middleware')

// Register Middlewares
for(let key in middleware)
    router.use(rootRequire(path + middleware[key]))

module.exports = router