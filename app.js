const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
require("./DB/mongoose");
const songroute = require("./Routes/songs");
const userroute = require("./Routes/User")
app.use(express.json());
app.use(express.urlencoded());

app.use("/", songroute);
app.use("/", userroute);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

