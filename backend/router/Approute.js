const app = require("express");
const loctioncontroller = require("../controller/loctioncontroller");
const RestaurantController = require("../controller/RestaurantC");
const UserController = require("../controller/UserC");
const payment =require("../controller/PaymentController")
const approute = app.Router();
approute.get("/", loctioncontroller.getHome);
approute.get("/get-loc/", loctioncontroller.getLoction);
approute.get("/get-resto-list-by-id/:loc_id", RestaurantController.getRestro);
approute.get(
  "/get-restaurant-details-by-id/:id",
  RestaurantController.getRestaurantById
);
approute.get("/get-meal-type-list", RestaurantController.getMealTypeList);
approute.get(
  "/get-menu-items-by-restaurant-id/:r_id",
  RestaurantController.getMenuItemsByRestaurantId
);
approute.post("/create-user-account", UserController.createAccount);
approute.post("/login-account", UserController.userLogin);
approute.post("/filter", RestaurantController.filter);
approute.post("/create-orderId/",payment.createOrderId)
approute.post("/verify-payment",payment.varifyPayment)
module.exports = approute;
