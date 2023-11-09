let db = require("mongoose");
let Schema = db.Schema;

let UserSchema = new Schema({
  name: { type: String },
  mobile: { type: String },
  email: { type: String },
  address: { type: String },
  password: { type: String },
});

let UserModel = db.model("user", UserSchema, "users");

module.exports = UserModel;
