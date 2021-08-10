dotenv.config();
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import item from "./Data/InstagramFollowersData.js";
import { generateToken, isAuthenticated } from "./config/jwtConfig.js";
import dataPlan from "./Data/DataPlan.js";
import userRouter from "./Route/Payment.js";

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((req) => {
    console.log("database is ready");
  });

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orders: [],
});

const Message = mongoose.model("Message", contactSchema);
const Users = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("hi");
});
app.post("/confirm_order", isAuthenticated, (req, res) => {
  Users.findOne({ _id: req.user._id }, (error, foundUser) => {
    if (!error) {
      // there is no any error do further
      if (foundUser) {
        // user is found now update his/her order history
        foundUser.orders.push(req.body.orderDetails);
        foundUser.save((err, savedOrder) => {
          if (!err) {
            res.send(savedOrder);
          } else {
            // there was an error
            res.status(500).json({
              message:
                "there was an error, please mail us at someting@example.coms",
            });
          }
        });
      } else {
        res.status(500).json({
          message:
            "there was an error, please mail us at someting@example.coms",
        });
      }
    } else {
      // there is an error
      res.status(500).json({
        message: "there was an error, please mail us at someting@example.coms",
      });
    }
  });

  // res.send({
  //   YourId: req.user._id,
  //   YourName: req.user.fullname,
  //   YouUsername: req.user.username,
  //   YouEmail: req.user.email,
  // });
});
// payment api
app.use("/api", userRouter);
// data plan
app.post("/dataPlan", (req, res) => {
  const foundPlan = dataPlan.find((data) => Number(req.body.id) === data.id);
  if (foundPlan) {
    res.send(foundPlan);
  } else {
    res.status(404).json({ message: "item not found!" });
  }
});

// instgramfollowers data order api
app.get("/order", (req, res) => {
  res.send(item);
});

// register api
app.post("/register", (req, res) => {
  Users.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      new Users({
        fullname: req.body.fullName,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
      }).save(function (err) {
        if (!err) {
          res.send("register successfully");
        } else {
          console.log(err.message);
          res.send("register failed");
        }
      });
    } else {
      res.status(500).json({ message: "Username already exist, please login" });
    }
  });
});
// login api
app.post("/login", (req, res) => {
  Users.findOne({ username: req.body.username }, (err, user) => {
    if (user) {
      // user is exisit now chek for passwrd
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          // right crenditentials found
          res.status(200).json({
            token: generateToken(user),
            userInfo: {
              name: user.fullname,
              email: user.email,
              username: user.username,
            },
            message: " Successfully Logged in",
          });
        } else {
          // there was a problem
          res
            .status(400)
            .json({ message: "Either username or password is incorrect" });
        }
      });
    } else {
      res.status(400).json({
        message:
          "There is no any account with this credentials, please try register",
      });
    }
  });
});
// contact api
app.post("/contact", (req, res) => {
  new Message({
    email: req.body.email,
    message: req.body.message,
  }).save(function (err) {
    if (!err) {
      res.send("sucess you message");
    } else {
      console.log(err.messager);
      res.send("please try again");
    }
  });
});
app.listen(5000, (req, res) => {
  console.log("server is started baby");
});
