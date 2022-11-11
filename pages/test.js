import { Box } from "@mui/material"
import TodoCard from "../component/molecules/TodoCard"
import TodoCarousel from "../component/organisms/TodoCarousel"
import useFetchTodos from "../utils/customHook/useFetchTodos"
const Test = () => {
  const {todoData, loading, error} = useFetchTodos()

    return (
        <Box>
            <TodoCarousel />
        </Box>
    )
}


export default Test