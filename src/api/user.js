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

router.get("/:id", (req, res) => {
  const user_id = req.params.id;
  userService.getUser(user_id);
  res.send(`GET /user/${user_id}で実行`);
});

router.post("/", (req, res) => {
  userService.postUser(req);
  res.send("POST /userで実行");
});

router.put("/", (req, res) => {
  userService.putUser(req);
  res.send("PUT /userで実行");
});

router.delete("/:id", (req, res) => {
  const user_id = req.params.id;
  userService.deleteUser(user_id);
  res.send("DELETE /userで実行");
});

module.exports = router;
