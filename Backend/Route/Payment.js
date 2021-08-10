import express from "express";
import Razorpay from "razorpay";

const userRouter = express.Router();

userRouter.get("/payment", (req, res) => {
  var instance = new Razorpay({
    key_id: "rzp_test_7JG9IqXQcYjKiI",
    key_secret: "nX8AhrRPcbtRnk8roekeMq6K",
  });

  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    res.send(order);
  });
});

export default userRouter