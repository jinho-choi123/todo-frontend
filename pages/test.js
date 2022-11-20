import {Box} from "@mui/material"
import Authenticator from "../component/organisms/Authenticater";
import useFetchTodo from "../utils/customHook/useFetchTodo";
import { useDispatch } from "react-redux";
import TodoCarousel from "../component/organisms/TodoCarousel";
import MenuBar from "../component/molecules/MenuBar";
import { useEffect } from "react";
const Test = () => {
    const dispatch = useDispatch()
    const fetchTodo = useFetchTodo()
    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
    <Box>
        {/* <Authenticator> */}
            <TodoCarousel/>
        {/* </Authenticator> */}
    </Box>
    )
}

export default Test