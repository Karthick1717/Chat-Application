const {Pool} = require('pg');

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    port:5432,
    password:'kishorpostgres01',
    database:'chat_app',
    max:10
});

module.exports = pool;