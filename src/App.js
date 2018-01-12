import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageContainer from './container/MessageContainer';
import ProductsContainer from './container/ProductsContainer';
import CartContainer from './container/CartContainer';



class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}


export default App;
