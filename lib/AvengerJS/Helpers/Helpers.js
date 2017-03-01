// Register Helpers

module.exports = (dir) => {
    // Root Require
    require('./Require/RootRequire')(dir)

    // Alias Require
    require('./Require/AliasRequire')(dir)
}