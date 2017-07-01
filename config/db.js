/*
 |--------------------------------------------------------------------------
 | Database
 |--------------------------------------------------------------------------
 |
 | This array contains the database config
 */

const config = {
    client: process.env.DB_CLIENT,
    connection: {
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_DATABASE,
        charset  : process.env.DB_CHARSET
    }
}

/*
 |--------------------------------------------------------------------------
 | Exports
 |--------------------------------------------------------------------------
 */

module.exports = config