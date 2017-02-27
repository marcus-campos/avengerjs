//============================================
//# PROVIDERS CONFIG
//============================================

const providers = rootRequire('config/providers')
const path = rootRequire('config/app')('providers')

//============================================
//# EXPORTS
//============================================

const systemProviders = [
    'RouterProvider',
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
        app = rootRequire(path + providers[key])(app)

    return app;
}