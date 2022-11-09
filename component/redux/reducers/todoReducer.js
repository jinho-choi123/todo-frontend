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
            return {
                ...state, 
                todos: state.todos.filter(todo => todo.todoId != action.payload)
            }
        case types.REFRESH_TODO:
            return {
                ...state, 
                todos: action.payload 
            }
        case types.MARK_TODO:
            const newTodo = [...state.todos];
            newTodo.map((todo, index) => {
                if(todo.todoId == action.payload) {
                    todo.status = !todo.status 
                    return todo 
                } else {
                    return todo 
                }
            })
            return {
                ...state,
                todos: newTodo
            }
        default:
            return state;
    }
}

export default todoReducer 