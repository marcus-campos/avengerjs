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
const helmetConfig = require('./config/helmet')

// Routes requires
const index        = require('./app/Http/routes/index')

// App
const app          = express()

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

// Routes use
app.use('/', index)


/*
 * HELMET Configs
 */

// Disable Headers
app.disable('x-powered-by')

// Implement CSP with Helmet
app.use(helmet.contentSecurityPolicy(helmetConfig.csp))

// Implement X-XSS-Protection
app.use(helmet.xssFilter());


// Implement X-Frame
//app.use(helmet.xframe());
//app.use(helmet.xframe('deny'));
//app.use(helmet.xframe('sameorigin'));
//app.use(helmet.xframe('allow-from', 'http://example.com'));

// Implement Strict-Transport-Security
app.use(helmet.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
}));

// Sets "Referrer-Policy: same-origin".
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

// Implement hpkp for HTTP Public Key Pinning

const ninetyDaysInSeconds = 7776000

app.use(helmet.hpkp({
    maxAge: ninetyDaysInSeconds,
    sha256s: ['plU644p51=', 'zUk5tAtU5=']
}))

/*
 * END HELMET Configs
 */

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
