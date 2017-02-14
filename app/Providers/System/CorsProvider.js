const cors = require('cors')

//============================================
//# CORS CONFIGS
//============================================

// Configure whiteList
const whiteList = require('./../../../config/cors')

//============================================
//# CORS OPERATIONS
//============================================

const corsOptionsDelegate = function(req, callback){
  let corsOptions

  if(whiteList.indexOf(req.header('Origin')) !== -1) {
      corsOptions = {origin: true} // reflect (enable) the requested origin in the CORS response
  }
  else {
      corsOptions = {origin: false} // disable CORS for this request
  }

  callback(null, corsOptions) // callback expects two parameters: error and options
}

//============================================
//# EXPORTS
//============================================

module.exports = (app) => {
    app.use(cors(corsOptionsDelegate))
    return app
}