const { select } = require("../knex/knex.js");
const knex = require("../knex/knex.js");

module.exports = {
  selectAll: function (req) {
    knex
      .select("*")
      .from("users")
      .then(async (rows) => {
        await console.log("rows: ", rows);
      });
  },
};
