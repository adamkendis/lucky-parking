const { Client } = require("pg");

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PORT);

module.exports = pgClient = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

pgClient
  .connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.error(err.stack));
