let db = require("mongoose");
let Schema = db.Schema;

let MealTypeSchema = new Schema({
  name: { type: String },
  content: { type: String },
  image: { type: String },
  meal_type: { type: Number },
});

let MealTypeModel = db.model("meal_type", MealTypeSchema, "meal_types");

module.exports = MealTypeModel;
