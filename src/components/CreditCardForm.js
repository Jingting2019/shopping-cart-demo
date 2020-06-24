import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./creditCardForm.css";

const CreditCardForm = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={12}>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input required type="text" name="fullName" id="fullName" placeholder="Enter FullName" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="cardNumber">Card Number</Label>
            <Input required type="number" name="cardNumber" id="cardNumber" placeholder="Enter Card Number" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <FormGroup>
            <Label for="expirationMonth">Expiration</Label>
            <Input required type="number" name="expirationMonth" id="expirationMonth" placeholder="MM"/>
            <Input required type="number" name="expirationYear" id="expirationYear" placeholder="YY"/>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="ccvNumber">CCV</Label>
            <i className="fa fa-question-circle" />
            <Input required type="number" name="ccv" id="ccvNumber"/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input required type="checkbox" name="check" id="payCheck"/>
        <Label for="payCheck" check>Agreed to terms and conditions</Label>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
}

export default CreditCardForm;
