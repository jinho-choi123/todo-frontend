import { Box, Button, Grid} from "@mui/material"
import useFetchTodo from '../../utils/customHook/useFetchTodo.js';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { yesterday, tomorrow } from "../../utils/dateUtils.js";
import TodoCard from "../molecules/TodoCard.js";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
const TodoCarousel = () => {
    const [todoDate, setTodoDate] = useState(new Date())

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
            }}
            >
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item xs={0.7} className="carousel-btn">
                        <Button onClick={shift(-1)}>
                            <IoIosArrowDropleft size="50"/>
                        </Button>
                    </Grid>
                    <Grid item xs={3.3}>
                        <TodoCard todoDate={yesterday(todoDate)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TodoCard todoDate={todoDate}/>
                    </Grid>
                    <Grid item xs={3.3}>
                        <TodoCard todoDate={tomorrow(todoDate)}/>
                    </Grid>
                    <Grid item xs={0.7} className="carousel-btn">
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