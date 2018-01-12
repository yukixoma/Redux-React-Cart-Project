import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMsg } from '../actions/index';

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products >
                { this.showProducts (products) }
            </Products>
        );
    }

    showProducts = (products) => {
        let { onAddToCart, onChangeMsg }  = this.props;
        if (products.length > 0) {
            let result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        onAddToCart = { onAddToCart }
                        onChangeMsg = { onChangeMsg }
                    />
                )
            })
            return result;
        }
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id          : PropTypes.number.isRequired,
            name        : PropTypes.string.isRequired,
            img         : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price       : PropTypes.number.isRequired,
            rating      : PropTypes.number.isRequired,
            inventory   : PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMsg: PropTypes.func.isRequired
}

const mapStatetoProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMsg: (message) => {
            dispatch(actChangeMsg(message));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProp)(ProductsContainer);