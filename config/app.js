//============================================
//# APP CONFIGS
//============================================

const config = {
    views: './app/Http/views'
}

module.exports = (conf) => {
    return config[conf]
}