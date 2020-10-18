let orm = require("../config/orm")

let burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },

    insertOne: function (tablevalue, cb) {
        orm.insertOne("burgers", "burger_name", tablevalue, function (res) {
            cb(res)
        })
    },

    updateOne: function (condition, cb) {
        orm.updateOne("burgers", "burger_name", condition, function (res) {
            cb(res)
        });

    }

};


module.exports = burger;