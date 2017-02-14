const express        = require('express')
const path           = require('path')

// Dependencies
const favicon        = require('serve-favicon')
const logger         = require('morgan')
const cookieParser   = require('cookie-parser')
const bodyParser     = require('body-parser')

// Configs
const appConfig      = require('./config/app')

// Providers require
const providersDir   = __dirname + appConfig('providers'); // Path

const helmetProvider = require(providersDir + 'HelmetProvider')
const routesProvider = require(providersDir + 'RoutesProvider')

// App
let app          = express()

// View engine setup
app.set('views', path.join(__dirname, appConfig('views')))
app.set('view engine', 'jade')

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//Set providers
app = helmetProvider(app) //Helmet
app = routesProvider(app)


module.exports = app
