import { Box, Button, Item, Grid} from "@mui/material"
import {useEffect, useRef, useState} from 'react'
import TodoCard from "../molecules/TodoCard";
import { tomorrow, yesterday } from "../../utils/dateUtils.js";

const TodoCarousel = () => {
    const carouselWindow = useRef();
    const [todoDate, setTodoDate] = useState(new Date());

    const resetBtn = (event) => {
        setTodoDate(new Date())
    }

    const prevBtn = (event) => {
        setTodoDate(yesterday(todoDate))
    }
    const nextBtn = (event) => {
        setTodoDate(tomorrow(todoDate))
    }

    return (
        <Box>
        <Button variant="outlined" onClick={prevBtn}>prev</Button>
        <Button variant="outlined" onClick={nextBtn}>next</Button>
        <Button variant="outlined" onClick={resetBtn}>reset</Button>
        <Box 
        className="carousel-window" 
        ref={carouselWindow}
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