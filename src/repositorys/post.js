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
  select: async (post_id) => {
    let data = null;
    await knex
      .select("*")
      .from("posts")
      .leftJoin("users", "posts.poster_id", "users.user_id")
      .where("post_id", post_id)
      .then((row) => {
        data = row;
      });
    console.log("data: ", data);
    return data;
  },
  insert: (req) => {
    knex("posts")
      .insert(req.body)
      .then((result) => {
        console.log("result: ", result);
      });
  },
  update: (req) => {
    knex("posts")
      .update(req.body)
      .where("post_id", req.body.post_id)
      .then((result) => {
        console.log("result: ", result);
      });
  },
  delete: (post_id) => {
    knex("posts")
      .del()
      .where("post_id", post_id)
      .then((result) => {
        console.log("result: ", result);
      });
  },
};
