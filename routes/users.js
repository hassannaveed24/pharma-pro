const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("../utls/jwt");

module.exports = async (app) => {
  app.get("/api/me", async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select("-password");
      res.send(user);
    } catch (err) {
      res.status(406).send({ message: err.message });
    }
  });

  app.post("/api/signup", async (req, res) => {
    try {
      let user = await User.findOne({ username: req.body.username });
      if (user)
        return res.status(406).send({
          message: "User Already Registered",
        });

      const {
        name: bodyName,
        username: bodyUsername,
        password: bodyPassword,
        phoneNumber: bodyPhoneNumber,
      } = req.body;
      user = new User({
        name: bodyName,
        username: bodyUsername,
        password: bodyPassword,
        phoneNumber: bodyPhoneNumber,
      });
      const { name, username, phoneNumber, isApproved } = user;
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();

      res.status(200).send({
        name,
        username,
        phoneNumber,
        isApproved,
      });
    } catch (err) {
      res.status(406).send({ message: err.message });
    }
  });

  app.post("/api/approveUser/:_id", async (req, res) => {
    try {
      User.findByIdAndUpdate(
        req.params._id,
        {
          role: req.body.role,
          isApproved: true,
        },
        { new: true }
      ).exec((err, data) => {
        if (err) return res.status(406).send({ message: err.message });
        res.status(200).send(data);
      });
    } catch (err) {
      res.status(406).send({ message: err.message });
    }
  });
};
