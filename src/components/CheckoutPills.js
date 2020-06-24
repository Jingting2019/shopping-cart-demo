import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import CreditCardForm from './CreditCardForm';
import "./checkoutPills.css";

const CheckoutPills = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav pills>
        <Col xs="6">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}>
              <i className="fa fa-id-card" />
              Credit Card
            </NavLink>
          </NavItem>
        </Col>
        <Col xs="6">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}>
              <i className="fa fa-paypal" />
              PayPal
            </NavLink>
          </NavItem>
        </Col>
        <Col xs="12">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}>
              <i className="fa fa-university" />
              Bank Transfer
            </NavLink>
          </NavItem>
        </Col>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <CreditCardForm />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <p>PayPal is the easliest way to pay online</p>
              <Button color="primary">Login my PayPal</Button>
              <h6>Note:</h6>
              <p>Here are some notes.</p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <p>Bank account details</p>
              <h6>Bank:</h6>
              <p>The World Bank</p>
              <h6>Account Number:</h6>
              <p>123123123</p>
              <h6>IBAN:</h6>
              <p>132132132</p>
              <h6>Note:</h6>
              <p>Here are some notes.</p>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default CheckoutPills;
