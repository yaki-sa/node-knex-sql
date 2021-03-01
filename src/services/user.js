const userRepository = require("../repositorys/user");

module.exports = {
  getAllUsers: (req) => {
    userRepository.selectAll(req);
  },
  getUser: (user_id) => {
    userRepository.select(user_id);
  },
  postUser: (req) => {
    userRepository.insert(req);
  },
  putUser: (req) => {
    userRepository.update(req);
  },
  deleteUser: (user_id) => {
    userRepository.delete(user_id);
  },
};
