import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table dark style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Instagram Followers Services</th>
          <th>Rate Per 1000</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram Followers 15Day/Refill</td>
          <td>$2</td>
          <td>15Days Refill</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Instagram Real Active Followers</td>
          <td>$9</td>
          <td>20Days Refill</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Instagram Real Pure Followers</td>
          <td>$7</td>
          <td>10Days Refill</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Instagram Low Drop Followers</td>
          <td>$5</td>
          <td>20Days Refill</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Instagram High Quality Followers</td>
          <td>$4</td>
          <td>No Refill</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Instagram Cheapest Followers</td>
          <td>$2</td>
          <td>No Refill</td>
        </tr>
      </tbody>
    </Table>
    
  );
}

export default Example;