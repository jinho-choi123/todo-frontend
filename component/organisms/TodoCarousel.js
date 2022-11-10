import { Box, Button, Item, Grid} from "@mui/material"
import {useRef, useState} from 'react'
import TodoCard from "./TodoCard.js";
import todoData from '../todoData.js'

const TodoCarousel = () => {

    const carouselWindow = useRef();
    const [carouselIndex, setCarouselIndex] = useState(0);

    const prevBtn = (event) => {
        event.preventDefault();
        if(carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1);
        }
        console.log(carouselIndex)
        return 0
    }
    const nextBtn = (event) => {
        event.preventDefault();
        if(carouselIndex <3) {
            setCarouselIndex(carouselIndex + 1);
        }
        console.log(carouselIndex)
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
                    spacing={2}
                >
                    <Grid item xs={4}>
                        <TodoCard cardTitle="Yesterday" todoData={todoData}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TodoCard cardTitle="Today" todoData={todoData}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TodoCard cardTitle="Tomorrow" todoData={todoData}/>
                    </Grid>

                </Grid>
            </Box>

        </Box>
        </Box>
    )
}


export default TodoCarousel