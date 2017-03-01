const config = rootRequire('config/modules')

module.exports = (dir) => {
    global.aliasRequire = function(alias) {
        return require(dir + '/' + config[alias])
    }
}