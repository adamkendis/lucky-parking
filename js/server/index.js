require("dotenv").config({ path: __dirname + '/.env' });

const express = require("express");
const cors = require("cors");
const router = require("./router.js");
const port = process.env.PORT || 3007;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json('OK at ' + new Date());
})

app.use("/api", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
