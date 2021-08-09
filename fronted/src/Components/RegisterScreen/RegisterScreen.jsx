import React, { useState } from "react";
import { Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
function RegisterScreen(props) {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const submitHandler = (e) => {
    axios
      .post("/register", {
        fullName,
        email,
        username,
        password,
      })
      .then((response) => {
        toast("succesfully registered login now")
        props.history.push("/login");
      })
      .catch((err) => {
        toast("Username or email is already registered change your username or email");
      });
  };
  return (
    <div
      className="registerScreen"
      style={{ textAlign: "center", margin: "10px" }}
    >
      <h2>Register</h2>
      <Label style={{ fontSize: "2rem" }}>Full Name</Label>
      <Input
        style={{ textAlign: "center" }}
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter your fullName"
      ></Input>
      <Label style={{ fontSize: "2rem" }}>Email id</Label>
      <Input
        style={{ textAlign: "center" }}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      ></Input>
      <Label style={{ fontSize: "2rem" }}>Username</Label>
      <Input
        style={{ textAlign: "center" }}
        type="username"
        onChange={(e) => setUserName(e.target.value)}
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
        Register
      </Button>
      <Link to="/login" style={{ textDecoration: "none" }}>
        Login Now
      </Link>
    </div>
  );
}

export default RegisterScreen;
