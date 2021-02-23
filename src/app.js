const express = require("express");
const app = express();

const user = require("./router/user");

const port = 3000;

app.use("/user", user);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
