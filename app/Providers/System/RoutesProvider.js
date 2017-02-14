const routes = require('./../../Http/routes')

//============================================
//# ROUTES OPERATIONS
//============================================
function handler(app) {

    // Catch 404 and forward to error handler
    app.use((req, res, next) => {
        let err = new Error('Not Found')
        err.status = 404
        next(err)
    })

    // Error handler
    app.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message
        res.locals.error = process.env.LOCAL === 'local' ? err : {}
        // Render the error page
        res.status(err.status || 500)

        //TODO: Option to return html or text-plain
        res.send({
            status: res.locals.error.status,
            message: res.locals.message,
            error: res.locals.error.stack
        })
    })

    return app;
}

//============================================
//# EXPORTS
//============================================

module.exports = (app) => {
    for(let key in routes)
        app.use(routes[key].path, routes[key].route)

    app = handler(app)
    return app;
}