const { check } = require("express-validator");

module.exports = [
  check("name").not().isEmpty().withMessage("必須項目です。"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("必須項目です。")
    .isEmail()
    .withMessage("メールアドレスの形式が間違っています。"),
  check("password").not().isEmpty().withMessage("必須項目です。"),
];
