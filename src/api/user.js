const express = require("express");
const router = express.Router();
const userService = require("../services/user");
const { validationResult } = require("express-validator");

const userCreateValidator = require("../validators/userCreateValidator");
const userUpdateValidator = require("../validators/userUpdateValidator");

router.get("/", (req, res) => {
  userService.getAllUsers(req);
  res.send("GET /userで実行");
});

router.get("/:id", async (req, res) => {
  const user_id = req.params.id;
  try {
    await userService.getUser(user_id);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }

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
