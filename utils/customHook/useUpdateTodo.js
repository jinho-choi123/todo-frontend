import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { updateTodo } from '../../component/redux/actions/TodoAction'

 const useUpdateTodo = () =>{
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)
    const update = (newTodo, todoId) => {
        setLoading(true)
        axios.put('http://localhost:3000/api/todo/update', newTodo, {
            params: {
                todoid: todoId
            }
        })
            .then((res) => {
                if(!res.data.status && res.data.redirect=='/login') {
                    return router.push('/login')
                } else {
                    dispatch(updateTodo({todoId: todoId, update: newTodo}))
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
    return {update, err, loading}
}

export default useUpdateTodo