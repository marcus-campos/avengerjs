const config = rootRequire('config/modules')

module.exports = (dir) => {
    global.aliasRequire = function(alias, enableCaching = false) {

        if(enableCaching == false)
            rootRequire('lib/AvengerJS/Require/Cache').purge(dir + '/' + config[alias]) // Destroy cache

        return require(dir + '/' + config[alias])
    }
}