let connection = require('./connection.js');

let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertBurger: function () {

    },
    updateBurger: function () {

    }
}

module.exports = orm;

