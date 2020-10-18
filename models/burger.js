let orm = require("../config/orm")

let burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },

    insertOne: function (cb) {
        orm.insertOne("burgers", "burger_name", "Double Cheez", function (res) {
            cb(res)
        })
    },

    updateOne: function (cb) {
        orm.updateOne("burgers", "burger_name", req.body.plan, req.params.id, function (res) {
            cb(res)
        });

    }

};


module.exports = burger;