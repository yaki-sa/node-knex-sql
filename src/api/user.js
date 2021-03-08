const express = require("express");
const router = express.Router();
const userService = require("../services/user");
const { validationResult } = require("express-validator");

const userCreateValidator = require("../validators/userCreateValidator");
const userUpdateValidator = require("../validators/userUpdateValidator");
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

router.post("/", userCreateValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  userService.postUser(req);
  res.send("POST /userで実行");
});

router.put("/", userUpdateValidator, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  userService.putUser(req);
  res.send("PUT /userで実行");
});

router.delete("/:id", (req, res) => {
  const user_id = req.params.id;
  userService.deleteUser(user_id);
  res.send("DELETE /userで実行");
});

module.exports = router;
