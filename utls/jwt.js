const jwt = require("jsonwebtoken");
const config = require("config");
const configSchema = require("../models/power/config");

function encodeJWT(data) {
  return jwt.sign(
    {
      expiresIn: 172800,
      iat: new Date().valueOf(),
      data,
    },
    config.get("jwtPrivateKey")
  );
}

function decodeJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.get("jwtPrivateKey"), function (err, decoded) {
      if (err) {
        resolve(null);
      }
      resolve(decoded);
    });
  });
}

module.exports = { encodeJWT, decodeJWT };
