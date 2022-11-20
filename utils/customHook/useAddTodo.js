import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { createTodo } from '../../component/redux/actions/TodoAction'

const useAddTodo = () => {
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    const addTodo = (newTodo) => (dispatch) => {
        console.log(newTodo)
        setLoading(true)
        axios.post('http://localhost:3000/api/todo/create/', newTodo, { 
            withCredentials: true 
        })
            .then((res)=> {
                console.log(res)
                dispatch(createTodo(res.data))
            })
            .catch((err) => {
                console.log(err)
                setErr(err)
            })
            .finally(() => {
                setLoading(false)
            })
    } 

    return {addTodo, err, loading}
}

export default useAddTodo