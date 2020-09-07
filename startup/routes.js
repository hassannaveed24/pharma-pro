const express = require("express")
const product = require("../routes/product")
const order = require("../routes/order")

module.exports = app => {
  app.use("/uploads", express.static("uploads"))
  app.use(express.json())

  app.get("/", async (req, res) => {
    res.status(200).send("Server is working")
  })

  app.use("/api")
  // require("../middleware/auth");
  require("../routes/role")(app)
  require("../routes/users")(app)
  require("../routes/authentication")(app)
}
