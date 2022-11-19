import { useSelector } from "react-redux"
import { dateCompare } from "../dateUtils"

const useTodoData = () => {
    const todoData = useSelector(state => state.todoReducer.todos)

    const filterTodos = (todoDate) => {
        return todoData.filter((todo) => {
            return dateCompare(new Date(todo.date), todoDate)
        })
    }
    return filterTodos
}

export default useTodoData