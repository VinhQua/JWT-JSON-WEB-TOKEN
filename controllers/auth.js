const { BadRequest } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide username and password");
  }
  const id = Date.now();
  const token = await jwt.sign({ username, id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res.status(StatusCodes.OK).json({ msg: `Welcome ${username}`, token });
};

module.exports = { login };
