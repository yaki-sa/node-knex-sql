const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");
const userService = require("../services/user");
// const ENV_PATH = path.join(__dirname, ".env");
// require("dotenv").config({ path: ENV_PATH });

router.get("/", (req, res) => {
  userService.getAllUsers(req);
  res.send("GET /userで実行");
});

router.post("/", (req, res) => {
  knex("users")
    .insert(req.body)
    .then((result) => {
      console.log("result: ", result);
    });
  res.send("POST /userで実行");
});

router.put("/", (req, res) => {
  knex("users")
    .update(req.body)
    .where("user_id", req.body.user_id)
    .then((result) => {
      console.log("result: ", result);
    });
  res.send("PUT /userで実行");
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  knex("users")
    .del()
    .where("user_id", req.params.id)
    .then((result) => {
      console.log("result: ", result);
    });
  res.send("DELETE /userで実行");
});

module.exports = router;
