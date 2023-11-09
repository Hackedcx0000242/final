const loctionmodel = require("../model/loctionmodel");

module.exports.getHome = (req, res) => {
  res.send({
    status: true,
    message: "okk",
  });
};
module.exports.getLoction = async (req, res) => {
  let result = await loctionmodel.find();
  if (result.length > 0) {
    res.send({
      status: true,
      result,
    });
  } else {
    res.send({
      status: false,
      message: "No data found",
    });
  }
};
