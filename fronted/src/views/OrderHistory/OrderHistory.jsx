import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

function OrderHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/order_history", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {data.map((order) => (
        <Card className="mb-5">
          <CardHeader>
            <CardTitle>{order.planName}</CardTitle>
          </CardHeader>
          <CardBody>
            <p>Plan Rate : {order.planRate}</p>
            <p>Plan Refil : {order.planRefil}</p>
            <p>Amount Paid : {order.amount}</p>
            <p>Payment Status : {order.isPaid ? "Paid" : "Unpaid"}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default OrderHistory;
