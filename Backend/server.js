dotenv.config();
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

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
});

const Message = mongoose.model("Message", contactSchema);
const Users = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("hi");
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
      res
        .status(500)
        .json({ message: "Username already exist, please login" });
    }
  });
});
// login api
app.post("/login", (req, res) => {
  Users.findOne({ username: req.body.username }, (err, user) => {
    if (user) {
      // user is exisit now chek for passwrd
      if (user.password === req.body.password) {
        res.status(200).json({ message: " Successfully Logged in" });
      } else {
        res
          .status(400)
          .json({ message: "Either username or password is incorrect" });
      }
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
