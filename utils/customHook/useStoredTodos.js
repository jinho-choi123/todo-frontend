import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useStoredTodos = ({todoDate}) => {
    const [todoData, setTodoData] = useState([])
    const todos = useSelector((state) => state.todoReducer.todos)

    useEffect(() => {
        setTodoData(todos.filter(todo => {
            console.log(todo.date)
            return true
        }))
    }, [todos])
    return todoData
}

export default useStoredTodos