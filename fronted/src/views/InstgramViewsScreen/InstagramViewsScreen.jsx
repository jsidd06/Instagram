import React from 'react';
import { Table } from 'reactstrap';
import {Link} from 'react-router-dom'

const InstagramViewsScreen = (props) => {
  return (
    <Table dark style={{textAlign: 'left'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Instagram Reel Views Services</th>
          <th>Rate Per 10000</th>
          <th>Description</th>
          <th>BuyNow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram Reel Views [No Refill, No Guarantee]</td>
          <td>$1</td>
          <td>NO Refill, No Guarantee</td>
          <td><Link className="btn btn-primary" to={`/orderdetail?plan=Instagram Reel Views [No Refill, No Guarantee]`}>BuyNow</Link></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default InstagramViewsScreen;