import axios from "axios";
import { setUsername } from "../../component/redux/actions/AuthAction";
import { useRouter } from "next/router"

const useFetchUser = () => {
    const router = useRouter()
    const fetchUser = () => (dispatch) => {
        axios.get('http://localhost:3000/api/auth/verify/', {
            withCredentials: true,
        })
        .then((res) => {
            if(res.data.status) {
                dispatch(setUsername(res.data.username))
            } else {
                router.push('/login')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return fetchUser
}

export default useFetchUser