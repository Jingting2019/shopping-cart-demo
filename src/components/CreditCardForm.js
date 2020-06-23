import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreditCardForm = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input type="text" name="fullName" id="fullName" placeholder="Enter FullName" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="cardNumber">Card Number</Label>
            <Input type="number" name="cardNumber" id="cardNumber" placeholder="Enter Card Number" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="expirationMonth">Expiration</Label>
        <Input type="number" name="expirationMonth" id="expirationMonth" placeholder="MM"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="ccvNumber">CCV</Label>
            <Input type="number" name="ccv" id="ccvNumber"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="payCheck"/>
        <Label for="payCheck" check>Agreed to terms and conditions</Label>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
}

export default CreditCardForm;
