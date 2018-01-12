import React, { Component } from 'react';
import * as Message from '../constants/Message';



class Product extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img}
                            className="img-fluid" alt={product.name}
                        />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a> {product.name} </a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRatings(product.rating)}
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left"> {product.price}$ </span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i 
                                        className="fa fa-shopping-cart"
                                        onClick = {() => this.onAddToCart(product)}
                                    >
                                    </i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    showRatings = (rating) => {
        let ratings = [];
        for(let  i = 0; i < rating; ++i) {
            ratings.push(
                <li key = {i}>
                    <i className="fa fa-star"/>
                </li> 
            )
        };
        for(let  i = 0; i < (5 - rating); ++i) {
            ratings.push(
                <li key = {5-i}>
                    <i className="fa fa-star-o"/>
                </li> 
            )
        };
        return ratings;
    }
    onAddToCart = (product)=> {
        this.props.onAddToCart(product);
        this.props.onChangeMsg(Message.MSG_ADD_TO_CART_SUCCESS);
    }
}


export default Product;
