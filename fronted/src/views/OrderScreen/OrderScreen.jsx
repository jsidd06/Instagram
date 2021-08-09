import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Example = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/order")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(data);
  return loading ? (
    <p style={{ textAlign: "center", marginTop: "45vh" }}>
      Hang On, Loading Content
    </p>
  ) : (
    <Form>
      <FormGroup style={{ margin: "10px" }}>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          {data.map((o) => (
            <option>
              {o.orderName} || rs {o.orderPrice} || Refill {o.orderRefill}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup check style={{ margin: "10px" }}>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button style={{ margin: "10px" }} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Example;
