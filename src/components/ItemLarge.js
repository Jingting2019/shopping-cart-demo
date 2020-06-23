import React from 'react';
import { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import food from '../assets/story_28_lrg.jpg';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import "./item.css";

// library.add(faStroopwafel);

class ItemLarge extends React.Component {
  state = {
    // id: this.props.id,
    //discount: this.props.discount

  }

  render() {
    const inlineAndPaddingStyle = {
      display: "inline-block",
      paddingRight: "1rem"
    }
    return (
      <React.Fragment>
        <tr>
          <td>
            <img style={inlineAndPaddingStyle} src={food} width= {120} />
            <div style={inlineAndPaddingStyle}>
              <p style={{fontSize:"1.5rem"}}>Product Tilte</p>
              <p>Brief Content</p>
            </div>
          </td>
          <td>{this.props.discount}%</td>
          <td>
            <select
              value={this.state.selectValue}
              onChange={(e) => this.props.changeQuantity(this.props.id, e)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>
          <td>{this.props.price}</td>
          <td>
          <Button color="info" id="UncontrolledPopover" type="button"><i className="fa fa-refresh" /></Button>
          <UncontrolledPopover placement="left" target="UncontrolledPopover">
            <PopoverHeader>Remaining</PopoverHeader>
            <PopoverBody>3</PopoverBody>
          </UncontrolledPopover>

          <Button style={{marginLeft:"1rem"}} color="danger" onClick={() => this.props.onDelete(this.props.id)}><i className="fa fa-trash" /></Button>
          </td>
        </tr>
      </React.Fragment>

    )
  }
}

export default ItemLarge
