import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


const Example = (props) => {
  return (
    <Form>
      <FormGroup style={{ width: "100%", textAlign: "center" }}>
        <Label style={{ fontSize: "30px", margin: "10px" }} for="exampleEmail">
          Email
        </Label>
        <Input
          style={{ textAlign: "center" }}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Enter Your Emailaddress"
          required
        />
        <FormGroup style={{ fontSize: "30px", margin: "10px" }}>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" required />
        </FormGroup>
      </FormGroup>
      <Button style={{ margin: "auto", display: "block", marginTop: "10px" }}>
        Submit
      </Button>
    </Form>
  );
};

export default Example;
