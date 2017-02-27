//============================================
//# APP CONFIGS
//============================================

/*
 |--------------------------------------------------------------------------
 | Config
 |--------------------------------------------------------------------------
 |
 | This array of config aliases.
 |
 */

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