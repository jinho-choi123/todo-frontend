import * as types from '../actions/ActionTypes';

const initialState = {
    todos: [],
}

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case types.DELETE_TODO:
            return Object.assign({}, state, {todos: state.todos.filter(todo => todo._id != action.payload)})
        
        case types.REFRESH_TODO:
            return {
                ...state, 
                todos: action.payload 
            }
        case types.UPDATE_TODO:
            const newTodo = [...state.todos];
            const todoI = newTodo.findIndex(todo => todo._id == action.payload._id)
            newTodo[todoI] = {...newTodo[todoI], ...action.payload.update}
            return {
                ...state,
                todos: newTodo
            }
        case types.RESET_TODO:
            return {
                ...state, 
                todos: [],
                username: ''
            }
        default:
            return state;
    }
}

export default todoReducer 