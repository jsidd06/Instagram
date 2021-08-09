import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
const InstagramBotFollower = (props) => {
  return (
    //   instagram like services
    <Table dark style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Instagram Bot Followers Services</th>
          <th>Rate Per 1000</th>
          <th>Description</th>
          <th>BuyNow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram Bot Followers [No Refill, No Guarantee]</td>
          <td>$1</td>
          <td>NO Refill, No Guarantee</td>
          <td>
            <Link className="btn btn-primary" to={'/orderdetail?plan=Instagram Bot Followers [No Refill, No Guarantee]'}>BuyNow</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>
            Cheapest Instagram Followers [No Refill, No Guarantee,[80-100%]]
          </td>
          <td>$1</td>
          <td>NO Refill, No Guarantee</td>
          <td>
            <Link className="btn btn-primary" to={'/orderdetail?plan=Cheapest Instagram Followers [No Refill, No Guarantee,[80-100%]]'}>BuyNow</Link>
          </td>
        </tr>
      </tbody>
    </Table>
    // instagram likes services end
  );
};

export default InstagramBotFollower;
