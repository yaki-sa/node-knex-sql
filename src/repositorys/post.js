const knex = require("../knex/knex.js");

module.exports = {
  selectAll: (req) => {
    const page = req.query.page;

    knex
      .select("*")
      .from("posts")
      .where((builder) => {
        if (req.query.post_id) {
          builder.where("post_id", req.query.post_id);
        }
        if (req.query.name) {
          builder.where("title", req.query.title);
        }
        if (req.query.email) {
          builder.where("contents", req.query.contents);
        }
      })
      .then(async (rows) => {
        await console.log("rows: ", rows);
      });
  },
  select: (post_id) => {
    knex
      .select("*")
      .from("posts")
      .where("post_id", post_id)
      .then(async (rows) => {
        await console.log("rows: ", rows);
      });
  },
  insert: (req) => {
    knex("posts")
      .insert(req.body)
      .then((result) => {
        console.log("result: ", result);
      });
  },
};
