const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const user = require("./api/user");
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/user", user);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
