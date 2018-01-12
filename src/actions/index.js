import * as Types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMsg = (message) => {
    return {
        type: Types.CHANGE_MSG,
        message, 
    }
}

export const actUpdateCart = (item,operator) => {
    return {
        type: Types.UPDATE_CART,
        id: item.product.id,
        quantity: item.quantity,
        operator
    }
}
