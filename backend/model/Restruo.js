const db = require("mongoose");
const schema = db.Schema;
const loctionschema = new schema({
  name: { type: String },
  city: { type: String },
  location_id: { type: Number },
  city_id: { type: Number },
  locality: { type: String },
  thumb: { type: Array },
  aggregate_rating: { type: Number },
  rating_text: { type: String },
  min_price: { type: Number },
  contact_number: { type: String },
  cuisine_id: { type: Array },
  cuisine: [
    {

        "name": {type:String}
    }
],
  image: { type: String },
  mealtype_id: { type: Number },
});
let Restromodel = db.model("restaurant", loctionschema, "restaurants");
module.exports = Restromodel;
