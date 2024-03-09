// const express = require("express");
// const port = process.env.PORT || 3001;
// const app = express();
// require("./DB/mongoose");
// const routes = require("./Routes/index");

// app.use(express.json());
// app.use(express.urlencoded());

// app.use("/", routes);
// app.listen(port, () => {
//   console.log(`Server is up on port ${port}`);
// });

const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
require("./DB/mongoose"); //ensures mongoose runs and connects
const routes = require("./Routes/index");
app.use(express.json());
app.use(express.urlencoded());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
