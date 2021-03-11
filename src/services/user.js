const userRepository = require("../repositorys/user");
const bcrypt = require("bcrypt");
const NoDataFoundException = require("../errors/NoDataFoundError");

const saltRounds = 10;

module.exports = {
  getAllUsers: (req) => {
    userRepository.selectAll(req);
  },
  getUser: async (user_id) => {
    const data = await userRepository.select(user_id);
    if (!data.length) {
      throw new NoDataFoundException("対象のデータがありませんでした。", 1001);
    }
  },
  postUser: (req) => {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }
    userRepository.insert(req);
  },
  putUser: async (req) => {
    const data = await userRepository.select(req.body.user_id);
    if (!data.length) {
      throw new NoDataFoundException("対象のデータがありませんでした。", 1001);
    }
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }
    userRepository.update(req);
  },
  deleteUser: async (user_id) => {
    const data = await userRepository.select(user_id);
    if (!data.length) {
      throw new NoDataFoundException("対象のデータがありませんでした。", 1001);
    }
    userRepository.delete(user_id);
  },
};
