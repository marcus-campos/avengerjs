//============================================
//# APP CONFIGS
//============================================

const config = {
    views:      'app/Http/Views',
    routes:     'app/Http/routes',
    providers:  'app/Providers',
    middleware: 'app/Http/Middleware',
}

//============================================
//# EXPORTS
//============================================

// Config
module.exports = (conf) => {
    return config[conf]
}