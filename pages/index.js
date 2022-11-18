import { Box } from "@mui/material"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import axios from 'axios'
import TodoCarousel from "../component/organisms/TodoCarousel"
import { refreshTodo } from '../component/redux/actions/TodoAction'
import { useRouter } from "next/router"


const Home = () => {
  const dispatch = useDispatch()
  const [todoData, setTodoData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3000/api/todo/show', 
    {
      withCredentials: true
    })
    .then((res) => {
      if(!res.data.status && res.data.redirect=='/login') {
        console.log("neeed to redirect to login!!!!!!!!!!!")
        return router.push('/login')
    } else {
        setTodoData(res.data)
        dispatch(refreshTodo(res.data))
    }
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
      <TodoCarousel/>
    </Box>
  )
}

export default Home