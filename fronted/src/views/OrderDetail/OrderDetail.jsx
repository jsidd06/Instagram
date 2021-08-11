import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
function OrderDetail(props) {
  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {};
  const [data, setData] = useState(null);
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const planID = props.location.search.split("=")[1];
  useEffect(() => {
    axios
      .post("/dataPlan", {
        id: planID,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/payment", {
        amount: Math.floor((data.planRate / data.Rate) * quantity),
      })
      .then((res) => {
        var options = {
          key: "rzp_test_7JG9IqXQcYjKiI", // Enter the Key ID generated from the Dashboard
          amount: res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "SocialEcommerce.in",
          description: data.planName,
          order_id: res.data.id,
          handler: function (response) {
            // payment is succesfull now save this order in the database
            axios
              .post(
                "/confirm_order",
                {
                  orderDetails: {
                    ...data,
                    isPaid: true,
                    amount: res.data.amount / 100,
                    profile: profile,
                  },
                },
                {
                  headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              )
              .then((res) => {
                alert("Order placed successfully");
                props.history.push("/");
              });
          },
          prefill: {
            name: userInfo.name,
            email: userInfo.email,
            contact: "",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          // payment is failed try again
          alert("failed");
        });
        rzp1.open();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>Your Order here!</h1>
      <h2> Your Plan :- {planID}</h2>
      <h3>Plan Name:- {data.planName}</h3>
      <h3>Plan Rate:= {data.planRate}</h3>
      <h3>Plan Refill:= {data.planRefill}</h3>

      <Label className="m-2">
        Add Your Profile Instagram Link Proper{" "}
        <span style={{ color: "red" }}>
          * if your instagram profile link is not send proper we can't provide
          your order and your payment after submiting your wrong profile link{" "}
          <b>so please check your profile link first properly</b>
        </span>
      </Label>
      <Input
        className="m-2"
        onChange={(e) => setProfile(e.target.value)}
        value={profile}
        type="url"
        placeholder="enter your instagram profile link properly"
      />
      <Label className="m-2">Add Number of followers</Label>
      <Input
        className="m-2"
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="enter your number of followers"
      />
      <p>
        {Math.floor((data.planRate / data.Rate) * quantity) >= 75 ? (
          <span>INR {Math.floor((data.planRate / data.Rate) * quantity)}</span>
        ) : (
          <span>Order should be atleast Rs:-75</span>
        )}
      </p>
      <Button
        disabled={
          Math.floor((data.planRate / data.Rate) * quantity) < 75 || !profile
        }
        className="m-2"
        onClick={submitHandler}
      >
        BuyNow
      </Button>
    </div>
  );
}

export default OrderDetail;
