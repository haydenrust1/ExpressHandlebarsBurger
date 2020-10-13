let mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '!Chickens1994',
        database: 'burgers_db'
    });
}

connection.connect(function (err) {
    if (err) throw err;

    console.log('Connected to MySql server');
});

module.exports = connection;