import { Box, Button, Item, Grid} from "@mui/material"
import {useEffect, useRef, useState} from 'react'
import TodoCard from "../molecules/TodoCard";
import { tomorrow, yesterday } from "../../utils/dateUtils.js";

const TodoCarousel = () => {
    const carouselWindow = useRef();
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [todoDate, setTodoDate] = useState(new Date());

    const prevBtn = (event) => {
        setCarouselIndex(carouselIndex - 1);
        setTodoDate(yesterday(todoDate))
        
        return 0
    }
    const nextBtn = (event) => {
        setCarouselIndex(carouselIndex + 1);
        setTodoDate(tomorrow(todoDate))
        console.log(tomorrow(todoDate))
        return 0
    }

    return (
        <Box>
        <Button variant="outlined" onClick={prevBtn}>prev</Button>
        <Button variant="outlined" onClick={nextBtn}>next</Button>
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
            style={{transform: `translateX(-${carouselIndex * 1/3 * 100}vw)`}}
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