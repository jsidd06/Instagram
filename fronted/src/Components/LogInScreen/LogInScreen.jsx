import React, { useState } from "react";
import { Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function LogInScreen(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    axios
      .post("/login", {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.userInfo)
        );
        toast("Welcome to Social Market");
        props.history.push("/");
      })
      .catch((err) => {
        toast("username and password is incorrect");
      });
  };
  return (
    <div
      className="logInScreen"
      style={{ textAlign: "center", margin: "10px" }}
    >
      <h2>
        Login
      </h2>
      <Label style={{ fontSize: "2rem" }}>Username</Label>
      <Input
        style={{ textAlign: "center" }}
        onChange={(e) => setUserName(e.target.value)}
        type="email"
        placeholder="Enter your username"
      ></Input>
      <Label style={{ fontSize: "2rem" }}>Password</Label>
      <Input
        style={{ textAlign: "center" }}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      ></Input>
      <Button
        className="btn btn-primary"
        onClick={submitHandler}
        type="submit"
        style={{ margin: "10px" }}
      >
        Login
      </Button>

      <Link to="/register" style={{ textDecoration: "none" }}>
        Register Now
      </Link>
    </div>
  );
}

export default LogInScreen;
