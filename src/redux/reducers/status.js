let initialState = true;

let myReducer = (state = initialState, action) => {
    if(action.type === "CHANGE_STATUS") {
        state = !state;
        return state;
    } 
    return state;
} 

export default myReducer;