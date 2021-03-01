const { select } = require("../knex/knex.js");
const knex = require("../knex/knex.js");

module.exports = {
  selectAll: (req) => {
    knex
      .select("*")
      .from("users")
      .then(async (rows) => {
        await console.log("rows: ", rows);
      });
  },
  select: (user_id) => {
    knex
      .select("*")
      .from("users")
      .where("user_id", user_id)
      .then(async (rows) => {
        await console.log("rows: ", rows);
      });
  },
  insert: (req) => {
    knex("users")
      .insert(req.body)
      .then((result) => {
        console.log("result: ", result);
      });
  },
  update: (req) => {
    knex("users")
      .update(req.body)
      .where("user_id", req.body.user_id)
      .then((result) => {
        console.log("result: ", result);
      });
  },
  delete: (user_id) => {
    knex("users")
      .del()
      .where("user_id", user_id)
      .then((result) => {
        console.log("result: ", result);
      });
  },
};
