import { Box, Button, Grid} from "@mui/material"
import useFetchTodo from '../../utils/customHook/useFetchTodo.js';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { yesterday, tomorrow } from "../../utils/dateUtils.js";
import TodoCard from "../molecules/TodoCard.js";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
const TodoCarousel = () => {
    const [todoDate, setTodoDate] = useState(new Date())
    const dispatch = useDispatch()
    const fetchTodo = useFetchTodo()
    dispatch(fetchTodo())

    const shift = (LorR) => () => {
        if(LorR == 1) {
            setTodoDate(tomorrow(todoDate))
        } else if(LorR == -1) {
            setTodoDate(yesterday(todoDate))
        }
    } 


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
                    <Grid item xs={0.5} className="carousel-btn">
                        <Button onClick={shift(-1)}>
                            <IoIosArrowDropleft size="50"/>
                        </Button>
                    </Grid>
                    <Grid item xs={3.5}>
                        <TodoCard todoDate={yesterday(todoDate)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TodoCard todoDate={todoDate}/>
                    </Grid>
                    <Grid item xs={3.5}>
                        <TodoCard todoDate={tomorrow(todoDate)}/>
                    </Grid>
                    <Grid item xs={0.5} className="carousel-btn">
                        <Button onClick={shift(1)} >
                            <IoIosArrowDropright onClick={shift(1)} size="50"/>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </Box>
    )
}

export default TodoCarousel