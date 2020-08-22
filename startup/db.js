const mongoose = require("mongoose");
const config = require("config");

const db = config.get("db");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.log(err));
