const express = require("express");
const router = express.Router();
const postService = require("../services/post");

router.get("/", (req, res) => {
  postService.getAllPosts(req);
  res.send("GET /postで実行");
});

router.get("/:id", (req, res) => {
  const post_id = req.params.id;
  postService.getPost(post_id);
  res.send(`GET /post/${post_id}で実行`);
});

router.post("/", (req, res) => {
  postService.postPost(req);
  res.send("POST /postで実行");
});

module.exports = router;
