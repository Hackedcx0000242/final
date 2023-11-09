const Restromodel = require("../model/Restruo");
const MealTypeModel = require("../model/mealtype");
const RestaurantModel = require("../model/mealitem");

module.exports.getRestro = async (req, res) => {
  let { loc_id } = req.params;
  let result = await Restromodel.find(
    { location_id: loc_id },
    {
      name: 1,
      city: 1,
      locality: 1,
      image: 1,
    }
  );
  res.send({
    status: true,
    message: "Successfully get all restros",
    result,
  });
};
module.exports.getRestaurantById = async (request, response) => {
  let { id } = request.params;
  let result = await Restromodel.findById(id);
  response.send({
    status: true,
    result,
  });
};
module.exports.getMealTypeList = async (request, response) => {
  let result = await MealTypeModel.find();
  response.send({
    status: true,
    result,
  });
};

module.exports.getMenuItemsByRestaurantId = async (request, response) => {
  let { r_id } = request.params;
  let result = await RestaurantModel.find({ restaurantId: r_id });
  response.send({
    status: true,
    result,
  });
};

module.exports.filter = async (request, response) => {
  let {mealtype,cuisine,location,lcost,hcost ,page, sort } = request.body;
  let filters = {};

if(mealtype)
{
  filters['mealtype_id']=mealtype;
}

  // if(mealtype && cuisine)
  // {
  //     filters['mealtype_id']=mealtype;

  // }
  // if(mealtype && lcost && hcost)
  // {
  //     filters['mealtype_id']=mealtype;
  //     filters['min_price'] ={$lte :hcost , $gte :lcost}

  // }
  // if(mealtype && cuisine && lcost && hcost )
  // {
  //     filters['mealtype_id']=mealtype;
  //     filters['cuisine.id']={$in : cuisine};
  //     filters['min_price'] ={$lte :hcost , $gte :lcost}

  // }
  // if(mealtype && location )
  // {
  //     filters['mealtype_id']=mealtype;
  //     filters['locality']=location;

  // }
  // if(mealtype && location && lcost && hcost )
  // {
  //     filters['mealtype_id']=mealtype;
  //     filters['locality']=loction;
  //     filters['min_price'] ={$lte :hcost , $gte :lcost}

  // }
  // if(mealtype &&  location && lcost && hcost && cuisine)
  // {
  //     filters['mealtype_id']=mealtype;
  //     filters['locality']=location;
  //     filters['min_price'] ={$lte :hcost , $gte :lcost}
  //     filters['cuisine.id']={$in : cuisine}
  // }

  let result = await Restromodel.find(filters, {
    name: 1,
    city: 1,
    locality: 1,
    image: 1,
    mealtype_id: 1,
    cuisine: 1,
    min_price: 1,
  });
  response.send({
    status: true,
    result,
  });
};
