import * as types from './ActionTypes.js';

export const createTodo = (payload) => ({
    type: types.CREATE_TODO,
    payload: payload,
    // payload: {title: ?, todoId: ?, date: ?, status: ?}

})

export const deleteTodo = (payload) => ({
    type: types.DELETE_TODO,
    payload: payload 
})

export const refreshTodo = (payload) => ({
    type: types.REFRESH_TODO,
    payload: payload 
})

export const markTodo = (payload) => ({
    type: types.MARK_TODO,
    payload: payload 
})