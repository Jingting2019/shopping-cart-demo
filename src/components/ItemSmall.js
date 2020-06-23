import React from 'react';
import { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import food from '../assets/story_28_lrg.jpg';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import "./item.css";

// library.add(faStroopwafel);

class ItemSmall extends React.Component {
  state = {
    // id: this.props.id,
    //discount: this.props.discount

  }

  render() {
    return (
      <React.Fragment>
        <img src={food} width= {120} />
        <div>
          <p style={{fontSize:"1.5rem"}}>Product Tilte</p>
          <p>Brief Content</p>
        </div>
        <p>{this.props.discount}%</p>
        <select
          value={this.state.selectValue}
          onChange={(e) => this.props.changeQuantity(this.props.id, e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p>{this.props.price}</p>
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
