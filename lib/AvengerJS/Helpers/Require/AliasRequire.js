const config = rootRequire('config/alias')

module.exports = (dir) => {
    global.aliasRequire = function(alias, enableCaching = process.env.REQUIRE_CACHE) {

        if(enableCaching === 'false')
            rootRequire('lib/AvengerJS/Require/Cache').purge(dir + '/' + config[alias]) // Destroy cache

        return require(dir + '/' + config[alias])
    }
}