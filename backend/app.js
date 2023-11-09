const app = require("express");
require("dotenv").config();
const db = require("mongoose");
const cors =require("cors");
const server = app();
let DATABASE=process.env.DATABASE
const port = process.env.PORT || 3089;
const AppRoutes = require("./router/Approute");
const urldb = DATABASE;
// when post data is disable post body so enable is use middleware
server.use(cors())
server.use(app.json()); // for json type
server.use(app.urlencoded({ extended: false })); // from data and other format
server.use("/api", AppRoutes);
db.connect(urldb)
  .then(() => {
    console.log("connected to database");
    server.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
