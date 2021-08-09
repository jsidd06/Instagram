import React from "react";
import { Button, Input, Label } from "reactstrap";
function OrderDetail(props) {
  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }
  return (
    <div>
      <h1> Your Plan :- {props.location.search.split("=")[1]}</h1>
      <h2>Your Order here!</h2>

      <Label>Instagram Link</Label>
      <Input type="url" placeholder="enter your instagram url(link)" />
      <Label>Number of followers</Label>
      <Input type="number" placeholder="enter your number of followers" />
      <Button>BuyNow</Button>
    </div>
  );
}

export default OrderDetail;
