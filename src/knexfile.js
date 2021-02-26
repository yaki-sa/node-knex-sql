require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      // host: process.env.DB_HOST || "localhost",
      // user: process.env.DB_USER || "root",
      // password: process.env.DB_PASSWORD || "passw0rd",
      // database: process.env.DB_DATABASENAME || "knex-db",
      host: "localhost",
      user: "root",
      password: "passw0rd",
      database: "knex-db",
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
