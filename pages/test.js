import { Box } from "@mui/material"
import TodoCard from "../component/molecules/TodoCard"
import useFetchTodos from "../utils/customHook/useFetchTodos"

const Test = () => {
    const {todoData, loading, error} = useFetchTodos()
    return (
        <Box>
            <TodoCard todoDate={new Date('2022-10-11')}/>
        </Box>
    )
}


export default Test