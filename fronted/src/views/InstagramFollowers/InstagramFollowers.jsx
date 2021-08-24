import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

function InstagramFollowers({ id }) {
  return (
    <Table dark style={{ textAlign: "left" }} >
      <thead>
        <tr>
          <th>#</th>
          <th>Instagram Followers Services</th>
          <th>Rate Per 1000</th>
          <th>Description</th>
          <th>BuyNow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram Followers 15Day/Refill</td>
          <td>INR 148</td>
          <td>15Days Refill</td>
          <td>
            <Link
              className="btn btn-primary"
              to={`/orderdetail?plan=1`}
            >
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Instagram Real Active Followers</td>
          <td>INR 670</td>
          <td>20Days Refill</td>
          <td>
            <Link
              className="btn btn-primary"
              to={`/orderdetail?plan=2`}
            >
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Instagram Real Pure Followers</td>
          <td>INR 520</td>
          <td>10Days Refill</td>
          <td>
            <Link className="btn btn-primary" to={`/orderdetail?plan=3`}>
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Instagram Low Drop Followers</td>
          <td>INR 372</td>
          <td>20Days Refill</td>
          <td>
            <Link className="btn btn-primary" to={`/orderdetail?plan=4`}>
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Instagram High Quality Followers</td>
          <td>INR 298</td>
          <td>No Refill</td>
          <td>
            <Link className="btn btn-primary" to={`/orderdetail?plan=5`}>
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Instagram Cheapest Followers</td>
          <td>INR 112</td>
          <td>No Refill</td>
          <td>
            <Link className="btn btn-primary" to={`/orderdetail?plan=6`}>
              BuyNow
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default InstagramFollowers;
