import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { createTodo } from '../../component/redux/actions/TodoAction'

const useAddTodo = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    const add = (newTodo) => {
        setLoading(true)
        axios.post('http://localhost:3000/api/todo/create', newTodo)
            .then((res)=> {
                if(!res.data.status && res.data.redirect=='/login') {
                    return router.push('/login')
                } else {
                    dispatch(createTodo(res.data))

                }
            })
            .catch((err) => {
                console.log(err)
                setErr(err)
            })
            .finally(() => {
                setLoading(false)
            })
    } 

    return {add, err, loading}
}

export default useAddTodo