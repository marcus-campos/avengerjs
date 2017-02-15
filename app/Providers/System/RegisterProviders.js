//============================================
//# PROVIDERS CONFIG
//============================================

const providers = require('./../../../config/providers')
const path = require('./../../../config/app')('providers')

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
        app = require('./../../../' + path + '/System/' + systemProviders[key])(app)
    // Human
    for (let key in providers)
        app = require('./../../../' + path + '/' + providers[key])(app)

    return app;
}