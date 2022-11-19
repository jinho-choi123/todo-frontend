import axios from "axios"
import { useRouter } from "next/router"

const Authenticator = ({children}) => {
    const router = useRouter()
    axios.get('http://localhost:3000/api/auth/verify', { 
        withCredentials: true 
        })
        .then((res) => {
            if(!res.data.status){
                router.push('/login')
            } else {return}
        })
        .catch((err) => {
            console.log(err)
        })

    return (
        <div>
            {children}
        </div>
    )
}

export default Authenticator