import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

ReactDom.render(
  <Container>
    <App />
  </Container>,
  document.getElementById("root")
);
