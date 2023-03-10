import axios from "axios"
import { useRouter } from "next/router"

const Authenticator = ({children}) => {
    const router = useRouter()
    axios.get('http://localhost:3000/api/auth/verify/', { 
        withCredentials: true 
        })
        .then((res) => {
            console.log(res)
            if(!res.data.status){
                router.push('/login')
            } 
        })
        .catch((err) => {
            console.log("got error from authenticator")
            console.log(err)
        })

    return (
        <div>
            {children}
        </div>
    )
}

export default Authenticator