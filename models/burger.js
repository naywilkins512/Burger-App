let orm = require("../config/orm")

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "Double Cheez");

orm.updateOne("burgers", "burger_name", req.body.plan, req.params.id);

module.exports = burger;