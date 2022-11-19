import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../../component/redux/actions/TodoAction';

const useDeleteTodo = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    const remove = (todoId) => {
        setLoading(true)
        axios.delete('http://localhost:3000/api/todo/remove',{params: {todoid: todoId}} )
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