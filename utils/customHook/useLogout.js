import axios from "axios"
import { useRouter } from "next/router"
import { resetTodo } from "../../component/redux/actions/TodoAction"

const useLogout = () => {
    const router = useRouter()
    const logoutUser = () => (dispatch) => {
        axios.get('http://localhost:3000/api/auth/logout/', {
            withCredentials: true
        })
            .then((res) => {
                dispatch(resetTodo())
                router.push('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return logoutUser
}

export default useLogout