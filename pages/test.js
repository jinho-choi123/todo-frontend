import { Box } from "@mui/material"
import TodoCard from "../component/TodoCard"
import useFetchTodos from "../utils/customHook/useFetchTodos"

const Test = () => {
    const {todoData, loading, error} = useFetchTodos()
    console.log(todoData)
    return (
        <Box>
        </Box>
    )
}


export default Test