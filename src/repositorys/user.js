const knex = require("../knex/knex.js");
const { attachPaginate } = require("knex-paginate");
attachPaginate();

module.exports = {
  selectAll: (req) => {
    const page = req.query.page;

    knex
      .select("*")
      .from("users")
      .where((builder) => {
        if (req.query.user_id) {
          builder.where("user_id", req.query.user_id);
        }
        if (req.query.name) {
          builder.where("name", req.query.name);
        }
        if (req.query.email) {
          builder.where("email", req.query.email);
        }
      })
      .paginate({
        perPage: 2,
        currentPage: page,
      })
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
