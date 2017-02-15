//============================================
//# APP CONFIGS
//============================================

const config = {
    views: '/app/Http/Views/',
    providers: '/app/Providers/'
}

//============================================
//# EXPORTS
//============================================

// Config
module.exports = (conf) => {
    return config[conf]
}