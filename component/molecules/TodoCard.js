import { CardContent, Card, Typography, FormGroup, FormControlLabel, Checkbox} from "@mui/material"
import {useSelector} from 'react-redux'
import todoCardTitle from '../../utils/todoCardTitle'
import { useState } from "react"
import useStoredTodos from "../../utils/customHook/useStoredTodos"
import TodoContent from '../atoms/TodoContent'

const TodoCard = ({todoDate})=> {
    const cardTitle = todoCardTitle(todoDate)
    const todoData = useStoredTodos(todoDate)

    return (
        <Card sx={{width:1/2}} variant="outlined">
            <CardContent>
                <Typography variant="h6" component="div" align="center">
                    {cardTitle}
                </Typography>
                <TodoContent todoDate={todoDate}/>
            </CardContent>
        </Card>
    )
    
}

export default TodoCard