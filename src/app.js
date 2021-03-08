const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const user = require("./api/user");
const post = require("./api/post");
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/user", user);
app.use("/post", post);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
