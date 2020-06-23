import React from 'react';
import ShoppingCart from './components/ShoppingCart';


class App extends React.Component {
    render() {
        return (
            <div style={{width: "80%", margin: "auto"}}>
                <ShoppingCart />
            </div>
        )
    }
}
export default App;
