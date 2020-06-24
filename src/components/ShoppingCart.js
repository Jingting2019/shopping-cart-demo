import React from 'react';
import ItemSmall from './ItemSmall';
import ItemLarge from './ItemLarge';
import { Table, Button} from 'reactstrap';
import CheckoutModal from './CheckoutModal';
import { Fragment } from 'react';
import Media from 'react-media';

class ShoppingCart extends React.Component {
  state = {
    items: [
      {id: 0, coupon: 35,quantity: 1,price: 1.99,remain: 3},
      {id: 1, coupon: 0,quantity: 1,price: 100.99,remain: 3},
      {id: 2, coupon: 15,quantity: 1,price: 21.99,remain: 3},
      {id: 3, coupon: 20,quantity: 1,price: 91.99,remain: 3},
      {id: 4, coupon: 12,quantity: 1,price: 11.99,remain: 3}
    ]
  }

  handleDelete = (itemId) => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({items: items});
  }

    handleChange = (itemId, e) => {
      let items = this.state.items;
      items[itemId].quantity = e.target.value;
      this.setState({items: items});
    }

  calTotal = () => {
    return this.state.items.reduce(function (acc, item) {
      return acc + (1 - item.coupon * 0.01) * item.quantity * item.price;
    }, 0)
  }

  render() {
    return (
      <div>
        <Media queries={{
               small: "(max-width: 599px)",
               medium: "(min-width: 600px)"

             }}>
               {matches => (
                 <Fragment>
                   {matches.small && (
                     <div>
                       {this.state.items.map(item => (
                         <ItemSmall
                           key={item.id}
                           id={item.id}
                           discount={item.coupon}
                           price={item.price}
                           onDelete={this.handleDelete}
                           changeQuantity={this.handleChange}
                         />
                       ))}
                       <hr/>
                       <p>total: ${Math.round(this.calTotal() * 100) / 100.00}</p>
                       <hr/>
                       <Button color="warning" size="lg" block style={{marginBottom: "1rem"}}>Continue Shopping</Button>
                       <CheckoutModal buttonLabel="CheckOut" />
                     </div>
                   )}
                   {matches.medium && (
                     <div>
                      <Table hover>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Discount</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {this.state.items.map(item => (
                          <ItemLarge
                            key={item.id}
                            id={item.id}
                            discount={item.coupon}
                            price={item.price}
                            onDelete={this.handleDelete}
                            changeQuantity={this.handleChange}
                          />

                        ))}
                        </tbody>
                      </Table>
                      <hr/>
                      <p style={{display: "flex", justifyContent: "flex-end"}}>total: </p>
                      <p style={{display: "flex", justifyContent: "flex-end"}}>${Math.round(this.calTotal() * 100) / 100.00}</p>
                      <hr/>
                      <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Button color="warning" style={{display: "inline-block"}}>Continue Shopping</Button>
                        <CheckoutModal buttonLabel="CheckOut" />
                      </div>
                     </div>
                   )}

                 </Fragment>
               )}
          </Media>
      </div>
    )
  }
}

export default ShoppingCart
