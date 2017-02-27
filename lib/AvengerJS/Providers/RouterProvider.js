const path       = rootRequire('config/app')('middleware')
const express    = require('express')
const router     = express.Router()

const middleware = rootRequire('config/middleware')


for(let key in middleware)
    router.use(rootRequire(path + '/' + middleware[key]))

global.getRouter = () => router;

module.exports = (app) => {
    return app
}