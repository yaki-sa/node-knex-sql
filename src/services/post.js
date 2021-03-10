const postRepository = require("../repositorys/post");
const NoDataFoundException = require("../errors/NoDataFoundError");

module.exports = {
  getAllPosts: (req) => {
    postRepository.selectAll(req);
  },
  getPost: async (post_id) => {
    const data = await postRepository.select(post_id);
    console.log(data);
    if (!data) {
      console.log(data);

      throw new NoDataFoundException("対象のデータがありませんでした。", 1001);
    }
  },
  postPost: (req) => {
    postRepository.insert(req);
  },
  putPost: (req) => {
    const data = postRepository.select(post_id);
    if (!data) {
      throw new NoDataFoundException("対象のデータがありませんでした。", 1001);
    }
    postRepository.update(req);
  },
  deletePost: (post_id) => {
    const data = postRepository.select(post_id);
    if (!data) {
      throw new NoDataFoundException("対象のデータがありませんでした。", 1001);
    }
    postRepository.delete(post_id);
  },
};
