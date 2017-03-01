module.exports = (dir) => {
    global.destroyRequiredCache = function(name) {
        rootRequire('lib/AvengerJS/Require/Cache').purge(dir + '/' + name)
    }
}