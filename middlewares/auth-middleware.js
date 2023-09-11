const { Unauthenticated } = require("../errors");
const jwt = require("jsonwebtoken");
const authMiddleWare = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token || !token.startsWith("Bearer")) {
    throw new Unauthenticated("No token provided");
  }
  token = token.split(" ")[1];
  const decoded = await jwt.verify(token, process.env.SECRET_KEY);

  console.log(decoded);
  next();
};

module.exports = authMiddleWare;
