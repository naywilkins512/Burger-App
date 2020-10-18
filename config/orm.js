let connection = require("./connection.js");


var orm = {

    // The last variable cb represents the anonymous function being passed from server.js
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (table, tableInput, tablevalue, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES ??";
        connection.query(queryString, [table, tableInput, tablevalue], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function (table, tableInput, tablevalue, valueID, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, tableInput, tablevalue, valueID], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }


};

module.exports = orm;