//============================================
//# APP CONFIGS
//============================================

const config = {
    views: '/app/Http/Views/',
    providers: '/app/Providers/'
}


//============================================
//# REGISTER PROVIDERS
//============================================

const providerPath = './../app/Providers/'

const providers = [
    require(providerPath + 'HelmetProvider'),
    require(providerPath + 'CorsProvider'),
    require(providerPath + 'RoutesProvider')
]


//============================================
//# EXPORTS
//============================================

// Config
module.exports.config = (conf) => {
    return config[conf]
}

module.exports.providers = providers