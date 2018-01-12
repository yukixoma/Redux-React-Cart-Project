import * as Types from '../constants/ActionType';
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data: [];


const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
            let shouldAdd = true;
            state = state.map(e => {
                if(e.product.id === product.id) {
                    shouldAdd = false;
                    return {
                        product: e.product,
                        quantity: e.quantity + quantity
                    }
                } else {
                    return e;
                }
            })
            if(shouldAdd) state.push({
                product,
                quantity
            })
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        case Types.UPDATE_CART: 
            state = updateCart(state,action);
            localStorage.setItem("CART", JSON.stringify(state));
            return state;
        case Types.SHOW_CART_ITEM:            
        default:
            return [...state]
    }
}

let updateCart = (state,action) => {
    switch(action.operator) {
        case "+":
            state = state.map(e => {
                if(e.product.id === action.id) {
                    return {
                        product: e.product,
                        quantity: e.quantity + 1
                    }
                } else {
                    return e;
                }
            })
        return state;
        case "-": 
            state = state.map(e => {
                if(e.product.id === action.id) {
                    return {
                        product: e.product,
                        quantity: e.quantity === 1 ? e.quantity : e.quantity -1 
                    }
                } else {
                    return e;
                }
            })
        return state;
        case "delete": 
            state = state.filter(e => e.product.id !== action.id)
        return state;
        default: 
            return state
    }
}


export default cart;