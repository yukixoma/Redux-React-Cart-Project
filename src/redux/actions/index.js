import * as types from '../constants/actionTypes';


export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}


export const status = () => {
    return { 
        type: types.CHANGE_STATUS,
    }
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort
    }
}

export const Delete = (taskName) => {
    return {
        type: types.DELETE,
        taskName
    }
}

export const changeStatus = (taskName) => {
    return {
        type: types.CHANGE_STATUS,
        taskName: taskName
    }
}