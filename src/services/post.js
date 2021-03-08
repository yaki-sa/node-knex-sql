const postRepository = require("../repositorys/post");

module.exports = {
  getAllPosts: (req) => {
    postRepository.selectAll(req);
  },
  getPost: (post_id) => {
    postRepository.select(post_id);
  },
  postPost: (req) => {
    postRepository.insert(req);
  },
};
