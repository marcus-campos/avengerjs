//============================================
//# PROVIDERS CONFIG
//============================================

const providers = require('./../../../config/providers')

//============================================
//# EXPORTS
//============================================

const systemProviders = [
    'HelmetProvider',
    'CorsProvider',
    'RoutesProvider'
];

module.exports = (app) => {
    // System
    for (let key in systemProviders)
        app = require('./' + systemProviders[key])(app)
    // Human
    for (let key in providers)
        app = require('./../' + providers[key])(app)

    return app;
}