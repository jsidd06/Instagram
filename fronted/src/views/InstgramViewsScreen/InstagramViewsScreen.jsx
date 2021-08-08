import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table dark style={{textAlign: 'center'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Instagram Reel Views Services</th>
          <th>Rate Per 10000</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Instagram Reel Views [No Refill, No Guarantee]</td>
          <td>$1</td>
          <td>NO Refill, No Guarantee</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;