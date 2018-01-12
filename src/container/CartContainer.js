import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actUpdateCart, actChangeMsg } from '../actions/index';


class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let result =  (
            <tr>
                <td>
                    {Message.MSG_CARD_EMPTY}
                </td>
            </tr>
        );
        let { onUpdateCart } = this.props;
        if(cart.length > 0) {
            
            result = cart.map((item,index)=>{
                return(
                    <CartItem
                        key = {index}
                        item = { item }
                        onUpdateCart = { onUpdateCart }
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        return <CartResult cart={cart}/>
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id          : PropTypes.number.isRequired,
                name        : PropTypes.string.isRequired,
                img         : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
                price       : PropTypes.number.isRequired,
                rating      : PropTypes.number.isRequired,
                inventory   : PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispacth,props) => {
    return{
        onUpdateCart: (item,operator) => {
            dispacth(actUpdateCart(item,operator));
            dispacth(actChangeMsg(
                operator === "delete" ? 
                    Message.MSG_DELETE_PRODUCT_IN_CARD_SUCCESS : 
                    (operator === "-" && item.quantity === 1 ) ? 
                        Message.MSG_ALERT : Message.MSG_UPDATE_CART_SUCCESS
            ));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);