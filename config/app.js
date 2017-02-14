//============================================
//# APP CONFIGS
//============================================

const config = {
    views: '/app/Http/views/',
    providers: '/app/Providers/'
}

module.exports = (conf) => {
    return config[conf]
}