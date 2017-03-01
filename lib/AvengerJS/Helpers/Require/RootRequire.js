module.exports = (dir) => {
    global.rootRequire = function(name) {
        return require(dir + '/' + name);
    }
}