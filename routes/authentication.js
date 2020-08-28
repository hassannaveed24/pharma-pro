const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("../utls/jwt");

module.exports = async (app) => {
  app.post("/auth/login", async (req, res) => {
    try {
      if (!req.body.username && !req.body.password)
        return res.status(406).send({
          message: "Email and Password is required",
        });

      let user = await User.findOne({ username: req.body.username });
      if (!user)
        return res.status(406).send({
          message: "Invalid username",
        });

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(406).send({
          message: "Invalid password",
        });

      let payload = {
        _id: user._id,
        name: user.name,
        username: user.username,
        phoneNumber: user.phoneNumber,
        isApproved: user.isApproved,
      };

      res.status(200).send({
        result: true,
        token: {
          access_token: jwt.encodeJWT(payload),
          token_type: "bearer",
          expires_in: 172800,
        },
      });
    } catch (err) {
      res.status(406).send({ message: err.message });
    }
  });
};
