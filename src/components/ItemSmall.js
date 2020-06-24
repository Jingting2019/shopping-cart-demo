import React from 'react';
import { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import food from '../assets/story_28_lrg.jpg';
import "./item.css";

class ItemSmall extends React.Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <img src={food} width= {320} />
        <div>
          <p style={{fontSize:"1.5rem"}}>Product Tilte</p>
          <p>Brief Content</p>
        </div>
        <hr />
        <p>{this.props.discount}%</p>
        <hr />
        <select
          value={this.state.selectValue}
          onChange={(e) => this.props.changeQuantity(this.props.id, e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <hr />
        <p>${this.props.price}</p>
        <hr />
        <Button color="info" id="UncontrolledPopover" type="button"><i className="fa fa-refresh" /></Button>
        <UncontrolledPopover placement="left" target="UncontrolledPopover">
          <PopoverHeader>Remaining</PopoverHeader>
          <PopoverBody>3</PopoverBody>
        </UncontrolledPopover>
        <Button style={{marginLeft:"1rem"}} color="danger" onClick={() => this.props.onDelete(this.props.id)}><i className="fa fa-trash" /></Button>
      </React.Fragment>
    )
  }
}

export default ItemSmall
