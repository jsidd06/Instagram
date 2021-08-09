import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Example = (props) => {
  return (
    <Form >  
      <FormGroup style={{margin:"10px"}}>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup check style={{margin:"10px"}}>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button style={{margin:"10px"}} type="submit">Submit</Button>
    </Form>
  );
}

export default Example;