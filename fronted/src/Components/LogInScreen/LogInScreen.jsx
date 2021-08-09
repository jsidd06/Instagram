import React from "react";
import { Input, Label, Button } from "reactstrap";
function LogInScreen(props) {
  return (
    <div
      className="logInScreen"
      style={{ textAlign: "center", margin: "10px" }}
    >
      <h2>{!props.isLogin ? "Login" : "Create an Account"}</h2>
      <Label style={{ fontSize: "2rem" }}>Username</Label>
      <Input
        style={{ textAlign: "center" }}
        type="email"
        placeholder="Enter your username"
      ></Input>
      <Label style={{ fontSize: "2rem" }}>Password</Label>
      <Input
        style={{ textAlign: "center" }}
        type="password"
        placeholder="Enter your password"
        required
      ></Input>
      <Label style={{ fontSize: "2rem" }} for="psw">{!props.isLogin ? null : 'ConfirmPassword'}</Label>
      {!props.isLogin && (
        <>
          <Input
          style={{ textAlign: "center" }}
            type="password"
            placeholder="Enter confirm Password"
            name="psw"
            required
          />
        </>
      )}
      <Button class="btn btn-primary" type="submit" style={{ margin: "10px" }}>
        {!props.isLogin ? "Login" : "Register"}
      </Button>
    </div>
  );
}

export default LogInScreen;
