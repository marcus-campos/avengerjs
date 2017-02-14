const routes = require('./../Http/routes')

module.exports = (app) => {
    for(let key in routes)
        app.use(routes[key].path, routes[key].route)

    return app;
}