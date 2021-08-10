import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import InstagramFollowers from "../InstagramFollowers/InstagramFollowers";
import InstagramLikeScreen from "../InsatagramLikeScreen/InstagramLikeScreen";
import InstagramViewsScreen from "../InstgramViewsScreen/InstagramViewsScreen";
import InstagramBotFollower from "../InsatagramBotFollowers/InstagramBotFollowers";

const Example = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  useEffect(() => {
    axios
      .get("/order")
      .then((res) => {
        setData([]);
        res.data.map((res) =>
          setData((preValue) => [
            ...preValue,
            { label: res.orderName, value: res.id },
          ])
        );
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
      <FormGroup className="mb-5" style={{ margin: "10px" }}>
        <Label for="exampleSelect">Select</Label>
        <Select options={data} onChange={(e) => setSelectedService(e.value)} />
      </FormGroup>
      {selectedService && selectedService === 1 ? (
        <InstagramFollowers  />
      ) : selectedService === 4 ? (
        <InstagramBotFollower />
      ) : selectedService === 3 ? (
        <InstagramViewsScreen />
      ) : selectedService === 2 ? (
        <InstagramLikeScreen />
      ) : null}
    </Form>
  );
};

export default Example;
