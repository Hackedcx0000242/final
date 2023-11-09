const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const key = "IamUtarshFather@Yash@MukeshVarshney#$";
module.exports.createAccount = async (req, res) => {
  let data = req.body;
  let newUser = new UserModel({
    name: data.name,
    mobile: data.mobile,
    email: data.email,
    address: data.address,
    password: data.password,
  });
  let result = await newUser.save();
  if (result) {
    res.send({
      stauts: true,
      message: "Your registartion is sucessfully",
      result,
    });
  } else {
    res.send({
      stauts: true,
      message: "Your registartion is failed",
      result,
    });
  }
};
module.exports.userLogin = async (req, res) => {
  let data = req.body;
  let result = await UserModel.findOne(
    {
      email: data.username,
      password: data.password,
      // address: data.address,
    },
    {
      _id: 0,
      __v: 0,
      password: 0,
    }
  );
  if (result) {
    let data = {
      name: result.name,
      id: result._id,
      email: result.email,
      address:result.address,
      mobile: result.mobile,


    };
    let token = jwt.sign(data, key, { expiresIn: "24h" }); //generate a token
    res.send({
      status: true,
      message: "Welcome to our app",
      token,
    });
  } else {
    res.send({
      status: false,
      message: "Invalid username or password",
    });
  }
};
