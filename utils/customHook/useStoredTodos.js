import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dateCompare } from "../dateUtils"

const useStoredTodos = () => {
    const [todoData, setTodoData] = useState([])
    const todos = useSelector((state) => state.todoReducer.todos)

    const usetodos = (todoDate)=> {
        useEffect(() => {
            setTodoData(todos.filter(todo => {
                return dateCompare(new Date(todo.date), new Date(todoDate))
            }))
        }, [todoDate])
        return todoData
    }
    return usetodos
}

export default useStoredTodos