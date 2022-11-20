import {Box} from "@mui/material"
import Authenticator from "../component/organisms/Authenticater";
import useFetchTodo from "../utils/customHook/useFetchTodo";
import { useDispatch } from "react-redux";
import TodoCarousel from "../component/organisms/TodoCarousel";
const Test = () => {
    const dispatch = useDispatch()
    const fetchTodo = useFetchTodo()
    dispatch(fetchTodo())

    return (<Box>
        <Authenticator>
            <TodoCarousel />
        </Authenticator>
    </Box>
    )
}

export default Test