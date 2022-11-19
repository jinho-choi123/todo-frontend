import axios from "axios"
import { refreshTodo } from "../../component/redux/actions/TodoAction"


const useFetchTodo = () => {
    const fetchTodo = () => dispatch => {
        axios.get('http://localhost:3000/api/todo/show', { 
                withCredentials: true 
            })
            .then((res) => {
                dispatch(refreshTodo(res.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return fetchTodo
}

export default useFetchTodo