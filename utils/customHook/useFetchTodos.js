import {useState, useEffect} from 'react' 
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { refreshTodo } from '../../component/redux/actions/TodoAction'

const useFetchTodos = () => {
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

    return {todoData, error, loading}
}

export default useFetchTodos