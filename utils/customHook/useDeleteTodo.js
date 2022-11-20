import {useState} from 'react'
import axios from 'axios'
import {deleteTodo} from '../../component/redux/actions/TodoAction';

const useDeleteTodo = () => {
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    const remove = (todoId) => (dispatch) => {
        setLoading(true)
        axios.delete('http://localhost:3000/api/todo/remove',{params: {todoid: todoId}}, { 
            withCredentials: true 
        })
            .then((res)=> {
                if(!res.data.status && res.data.redirect=='/login') {
                    return router.push('/login')
                } else {
                    dispatch(deleteTodo(res.data))
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

    return {remove, err, loading}
}

export default useDeleteTodo