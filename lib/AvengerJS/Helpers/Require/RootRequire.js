module.exports = (dir) => {
    global.rootRequire = function(name, enableCaching = true) {

        if(enableCaching == false) {
            require(dir + '/' + 'lib/AvengerJS/Require/Cache').purge(dir + '/' + name) // Destroy cache
        }

        return require(dir + '/' + name);
    }
}