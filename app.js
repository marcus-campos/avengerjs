// Root Require
require('./lib/AvengerJS/Requires/RootRequire')(__dirname)

const express        = require('express')

// App
let app              = express()

const path           = require('path')

// Dependencies
const favicon        = require('serve-favicon')
const cookieParser   = require('cookie-parser')
const bodyParser     = require('body-parser')

// Configs
require('dotenv').config()
const providerPath   = rootRequire('config/app')('providers')

// Register Providers
app                  = rootRequire('lib/AvengerJS/Providers/RegisterProviders')(app)


// View engine setup
// app.set('views', path.join(__dirname, '/' + appConfig('views')))
// app.set('view engine', 'jade')

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app