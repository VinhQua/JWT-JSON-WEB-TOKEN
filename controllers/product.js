const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "all products" });
};
module.exports = { getAllProducts };
