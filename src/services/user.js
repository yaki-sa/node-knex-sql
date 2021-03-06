const userRepository = require("../repositorys/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

module.exports = {
  getAllUsers: (req) => {
    userRepository.selectAll(req);
  },
  getUser: (user_id) => {
    userRepository.select(user_id);
  },
  postUser: (req) => {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }
    userRepository.insert(req);
  },
  putUser: (req) => {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }
    userRepository.update(req);
  },
  deleteUser: (user_id) => {
    userRepository.delete(user_id);
  },
};
