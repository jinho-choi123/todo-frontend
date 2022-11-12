import { Box } from "@mui/material"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import axios from 'axios'
import TodoCard from "../component/molecules/TodoCard"
import TodoCarousel from "../component/organisms/TodoCarousel"
import useFetchTodos from "../utils/customHook/useFetchTodos"
import { refreshTodo } from '../component/redux/actions/TodoAction'

const Test = () => {
    const dispatch = useDispatch()
    const [todoData, setTodoData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/api/todo/show')
        .then((res) => {
            setTodoData(res.data)
            dispatch(refreshTodo(res.data))
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <Box>
            <TodoCarousel />
        </Box>
    )
}


export default Test