let db = require("mongoose");
let Schema = db.Schema;

let MenuItemsSchema = new Schema({
  name: { type: String },
  description: { type: String },
  ingridients: { type: Array },
  restaurantId: { type: Schema.Types.ObjectId },
  image: { type: String },
  qty: { type: Number },
  price: { type: Number },
});

let MenuItemsModel = db.model("menu_item", MenuItemsSchema, "menu_items");

module.exports = MenuItemsModel;
