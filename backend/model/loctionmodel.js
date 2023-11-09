const db = require("mongoose");
const schema = db.Schema;
const loctionschema = new schema({
  name: { type: String },
  city_id: { type: Number },
  location_id: { type: Number },
  city: { type: String },
  country_name: { type: String },
});
let loctionmodel = db.model("loction", loctionschema, "locations");
module.exports = loctionmodel;
