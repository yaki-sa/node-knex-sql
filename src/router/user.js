const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("/userで実行");
});

module.exports = router;
