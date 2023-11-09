const Razorpay=require("razorpay")
const crypto= require("crypto")
var instance = new Razorpay({
    key_id: 'rzp_test_MLK6nxzrDt8vQW',
    key_secret: '8iicneJisXHyXHMSzyKqYeoq',
  });
module.exports.createOrderId=(req,res)=>{
   let {amount}= req.body;
    var options = {
        amount: Number(amount)*100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        if(err){
            res.status(500).send({
                status:false
            })

        }
        else{
            res.status(200).send({
                status:true,
                order,
            })
        }
      });
}
module.exports.varifyPayment =(req,res)=>{
 let {payment_id,order_id,signature}= req.body;
 let generated_signature= crypto.createHmac('sha256', "8iicneJisXHyXHMSzyKqYeoq")
    .update(order_id + "|" + payment_id)
    .digest('hex');
 if (generated_signature === signature) {
    res.send({staus:true})
 }
 else{
    res.send({
        status:false
    })
 }
}