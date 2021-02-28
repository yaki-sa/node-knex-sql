const userRepository = require("../repositorys/user");

module.exports = {
  getAllUsers: function (req) {
    userRepository.selectAll(req);
  },
};
