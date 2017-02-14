const express      = require('express')
const path         = require('path')

// Dependencies
const favicon      = require('serve-favicon')
const logger       = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')

// Read about in http://expressjs.com/pt-br/advanced/best-practice-security.html
const helmet       = require('helmet')

// Configs
const appConfig    = require('./config/app')

// Providers require
const providersDir = __dirname + appConfig('providers'); // Path

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
app.use(helmet())

//Set providers
app = helmetProvider(app) //Helmet
app = routesProvider(app)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
