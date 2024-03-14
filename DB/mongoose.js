const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose
  .connect(`mongodb+srv://junxic:siths@cluster0.yy2iwp6.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});
