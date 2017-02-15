module.exports = (req, res, next) => {
    console.log('Hello, i\'m a middleware')
    next();
}