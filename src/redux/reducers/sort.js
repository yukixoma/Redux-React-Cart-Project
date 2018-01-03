let initialState = {
    by: "name",
    value: 1,
}

let myReducer = (state = initialState, action) => {
    if(action.type === "SORT")  {
        state = action.sort; 
        return state;
    }
    return state;
}

export default myReducer;