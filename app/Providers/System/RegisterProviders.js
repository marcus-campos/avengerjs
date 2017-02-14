//============================================
//# PROVIDERS CONFIG
//============================================

const providers = require('./../../../config/app').providers

//============================================
//# EXPORTS
//============================================

module.exports = (app) => {
    for (let key in providers)
        app = providers[key](app)

    return app;
}