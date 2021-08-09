import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { toast} from 'react-toastify'

const Example = (props) => {
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const submitHandler =(e) => {
    axios.post('/contact', {
      email,message:text
    }).then(response => {
      toast("succesfully send")
      props.history.push('/');
    }).catch(err => {
      toast("falied to send")
      console.log(err);
    })
  }
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
          onChange={(e)=>setEmail(e.target.value)}
          id="exampleEmail"
          placeholder="Enter Your Emailaddress"
          required
        />
        <FormGroup style={{ fontSize: "30px", margin: "10px" }}>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="message" onChange={(e)=>setText(e.target.value)} id="exampleText" required />
        </FormGroup>
      </FormGroup>
      <Button onClick={submitHandler} style={{ margin: "auto", display: "block", marginTop: "10px" }}>
        Submit
      </Button>
    </Form>
  );
};

export default Example;
