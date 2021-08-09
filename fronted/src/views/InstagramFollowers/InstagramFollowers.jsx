import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

function InstagramFollowers({ id }) {
  return (
    <Table dark style={{ textAlign: "left" }}>
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
          <td>$2</td>
          <td>15Days Refill</td>
          <td>
            <Link
              className="btn btn-primary"
              to={`/orderdetail?plan=Instagram Followers 15Day/Refill`}
            >
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Instagram Real Active Followers</td>
          <td>$9</td>
          <td>20Days Refill</td>
          <td>
            <Link
              className="btn btn-primary"
              to="/orderdetail?plan=Instagram Real Active Followers"
            >
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Instagram Real Pure Followers</td>
          <td>$7</td>
          <td>10Days Refill</td>
          <td>
            <Link className="btn btn-primary" to="/orderdetail?plan=Instagram Real Pure Followers">
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Instagram Low Drop Followers</td>
          <td>$5</td>
          <td>20Days Refill</td>
          <td>
            <Link className="btn btn-primary" to="/orderdetail?plan=Instagram Low Drop Followers">
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Instagram High Quality Followers</td>
          <td>$4</td>
          <td>No Refill</td>
          <td>
            <Link className="btn btn-primary" to="/orderdetail?plan=Instagram High Quality Followers">
              BuyNow
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Instagram Cheapest Followers</td>
          <td>$1.5</td>
          <td>No Refill</td>
          <td>
            <Link className="btn btn-primary" to="/orderdetail?plan=Instagram Cheapest Followers">
              BuyNow
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default InstagramFollowers;
