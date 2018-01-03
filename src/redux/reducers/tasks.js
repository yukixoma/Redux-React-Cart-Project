import * as types from '../constants/actionTypes';

let initialState = [
  {
    taskName: "ReactJS",
    status: true,
  },
  {
    taskName: "AngularJS",
    status: false,
  },
  {
    taskName: "NodeJS",
    status: true,
  },
  {
    taskName: "Express",
    status: true,
  }
];

let myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL: 
          return state;
        case types.DELETE: 
          return state = state.filter(e => e.taskName !== action.taskName);
        case types.CHANGE_STATUS:
          let update = {};
          for (let i = 0;  i < state.length; i++) {
            if( state[i].taskName === action.taskName) {
              update.taskName = state[i].taskName;
              update.status = !state[i].status;
              state.splice(i,1);
            }
          }
          return state.concat(update);
        default: 
          return state;
    }
}

export default myReducer;