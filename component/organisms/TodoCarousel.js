import { Box} from "@mui/material"
import useFetchTodo from '../../utils/customHook/useFetchTodo.js';
import { useDispatch } from "react-redux";

const TodoCarousel = () => {
    const dispatch = useDispatch()
    const fetchTodo = useFetchTodo()
    dispatch(fetchTodo())

    return (
        <Box>
        <Box 
        className="carousel-window" 
        >
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
            }}
            >
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item xs={4}>
                        <TodoCard todoDate={yesterday(todoDate)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TodoCard todoDate={todoDate}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TodoCard todoDate={tomorrow(todoDate)}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </Box>
    )
}

export default TodoCarousel