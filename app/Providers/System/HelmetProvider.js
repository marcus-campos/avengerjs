const helmet = require('helmet')

//============================================
//# HELMET CONFIGS
//============================================

const helmetConfig = require('./../../../config/helmet')

//============================================
//# HELMET OPERATIONS
//============================================

function configAll(app) {

    // Use Helmet
    app.use(helmet())

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
    }))

    // Sets "Referrer-Policy: same-origin".
    app.use(helmet.referrerPolicy({policy: 'same-origin'}))

    // Implement hpkp for HTTP Public Key Pinning

    const ninetyDaysInSeconds = 7776000

    app.use(helmet.hpkp({
        maxAge: ninetyDaysInSeconds,
        sha256s: ['plU644p51=', 'zUk5tAtU5=']
    }))

    return app
}

//============================================
//# EXPORTS
//============================================
module.exports = (app) => {
    return configAll(app)
}