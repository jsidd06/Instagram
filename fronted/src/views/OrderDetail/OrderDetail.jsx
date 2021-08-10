import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
function OrderDetail(props) {
  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0)
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
    axios.get("/api/payment").then((res) => {
      var options = {
        key: "rzp_test_7JG9IqXQcYjKiI", // Enter the Key ID generated from the Dashboard
        amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert('failed')
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

      <Label className="m-2">Add Your Profile Instagram Link Proper <span style={{color: 'red'}}>* if your instagram profile link is not send proper we can't provide your order and your payment after submiting your wrong profile link <b>so please check your profile link first properly</b></span></Label>
      <Input className="m-2" type="url" placeholder="enter your instagram profile link properly" />
      <Label className="m-2">Add Number of followers</Label>
      <Input className="m-2" type="number" onChange={(e)  => setQuantity (e.target.value)} placeholder="enter your number of followers" />
      <p>INR {(data.planRate/1000)*quantity}</p>
      <Button className="m-2" onClick={submitHandler}>BuyNow</Button>
    </div>
  );
}

export default OrderDetail;
