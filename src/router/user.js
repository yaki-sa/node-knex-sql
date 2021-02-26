const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");
// const ENV_PATH = path.join(__dirname, ".env");
// require("dotenv").config({ path: ENV_PATH });

router.get("/", (req, res) => {
  console.log(process.env.DB_HOST);
  knex
    .select("*")
    .from("users")
    .then(async (rows) => {
      await console.log("rows: ", rows);
    });
  res.send("/userで実行");
});

module.exports = router;
