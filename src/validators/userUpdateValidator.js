const { check } = require("express-validator");

module.exports = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("必須項目です。")
    .bail()
    .isLength({ min: 4, max: 255 })
    .withMessage("4文字以上、255文字以下で入力してください。"),
  check("email")
    .optional({ nullable: true })
    .isLength({ max: 255 })
    .isEmail()
    .withMessage("メールアドレスの形式が間違っています。"),
  check("password")
    .optional({ nullable: true })
    .isLength({ min: 8, max: 10 })
    .withMessage("8文字以上、10文字以下で入力してください。"),
];
