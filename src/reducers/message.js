import * as Types from '../constants/ActionType';
import * as Message from '../constants/Message';

let isLocalStorageEmpty = localStorage.getItem("CART") ? true : false;
let isNewUser = isLocalStorageEmpty ? false : true;
let initialState = isNewUser? Message.MSG_WELCOME : Message.MSG_COMEBACK;

const message = (state = initialState, action) => {
    switch (action.type) { 
        case Types.CHANGE_MSG:
            return action.message         
        default:
            return [...state]
    }

}





export default message;