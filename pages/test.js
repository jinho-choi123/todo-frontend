import {Box} from "@mui/material"
import TodoCard from "../component/molecules/TodoCard";
import Authenticator from "../component/organisms/Authenticater";
import useFetchTodo from "../utils/customHook/useFetchTodo";
import { useDispatch } from "react-redux";
const Test = () => {
    const dispatch = useDispatch()
    const fetchTodo = useFetchTodo()
    dispatch(fetchTodo())

    return (<Box>
        <Authenticator>
            <TodoCard todoDate={new Date()}/>
        </Authenticator>
    </Box>
    )
}

export default Test