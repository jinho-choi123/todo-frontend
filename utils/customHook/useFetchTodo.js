import axios from "axios"
import { refreshTodo } from "../../component/redux/actions/TodoAction"

const useFetchTodo = () => {
    const fetchTodo = () => (dispatch) => {
        console.log("requesting todo show req.")
        axios.get('http://localhost:3000/api/todo/show', { 
                withCredentials: true 
            })
            .then((res) => {
                console.log(res)
                dispatch(refreshTodo(res.data))
            })
            .catch((err) => {
                console.log("got an error at fetchtodo hook")
                console.log(err)
            })
    }
    return fetchTodo
}

export default useFetchTodo