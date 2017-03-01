const router = aliasRequire('router', false);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to AvengerJS. Based on Express and Laravel')
})

module.exports = router
