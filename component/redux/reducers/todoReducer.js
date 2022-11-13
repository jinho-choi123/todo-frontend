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
            return Object.assign({}, state, {todos: state.todos.filter(todo => todo.todoId != action.payload)})
        case types.REFRESH_TODO:
            return {
                ...state, 
                todos: action.payload 
            }
        case types.UPDATE_TODO:
            const newTodo = [...state.todos];
            const todoI = newTodo.findIndex(todo => todo._id == action.payload.todoId)
            newTodo[todoI] = {...newTodo[todoI], ...action.payload.update}
            return {
                ...state,
                todos: newTodo
            }
        default:
            return state;
    }
}

export default todoReducer 