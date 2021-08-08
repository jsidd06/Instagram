import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table dark style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Instagram Reel Like Services</th>
          <th>Rate Per 1000</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram Reel likes Fastest Like [Less Drop But No Refill No Guarantee]</td>
          <td>$4</td>
          <td>NO Refill, No Guarantee</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Instagram Reel Likes Slow [No Guarantee, No Refill]</td>
          <td>$1</td>
          <td>No Refill, No Guarantee</td>
        </tr>
      </tbody>
    </Table>
    
  );
}

export default Example;