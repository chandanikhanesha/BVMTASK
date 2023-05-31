const jwt = require("jsonwebtoken");
var createError = require("create-error");
const User = require("../model/userModel");

const verifyauth = (req, res, next) => {
  try {
    console.log("hjhjhj===", req.headers);
    if (!req.headers["authorization"]) return next(createError.Unauthorized);
    const authheader = req.headers["authorization"];
    console.log("hjhjhj===", authheader);
    const bearertoken = authheader.split(" ");
    const token = bearertoken[1];
    console.log("token--", token);
    jwt.verify(
      token,
      process.env.USER_VERIFICATION_TOKEN_SECRET,
      (err, payload) => {
        if (err) {
          //   return next(createError.Unauthorized);
        }
        console.log(payload);
        req.payload = payload;
        next();
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.verifyauth = verifyauth;
