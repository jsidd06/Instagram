import React from 'react';
import { Table } from 'reactstrap';
import {Link} from 'react-router-dom'

const InstagramLikeScreen = (props) => {
  return (
    <Table dark style={{textAlign: 'left'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Instagram Reel Like Services</th>
          <th>Rate Per 1000</th>
          <th>Description</th>
          <th>BuyNow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram Reel likes Fastest Like [Less Drop But No Refill No Guarantee]</td>
          <td>INR 297</td>
          <td>NO Refill, No Guarantee</td>
          <td><Link className="btn btn-primary" to={`/orderdetail?plan=10`} >BuyNow</Link></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Instagram Reel Likes Slow [No Guarantee, No Refill]</td>
          <td>INR 75</td>
          <td>No Refill, No Guarantee</td>
          <td><Link className="btn btn-primary" to={`/orderdetail?plan=11`}>BuyNow</Link></td>
        </tr>
      </tbody>
    </Table>
    
  );
}

export default InstagramLikeScreen;