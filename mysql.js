var mysql = require('mysql2');

var pool = mysql.createPool({
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASS,
    "database": process.env.MYSQL_DB,
    "host":process.env.MYSQL_HOST,
    "port":process.env.MYSQL_PORT,
    "acquireTimeout":6000000

});

exports.pool =pool;