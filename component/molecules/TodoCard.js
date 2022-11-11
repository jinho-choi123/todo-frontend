import { CardContent, Card, Typography, FormGroup, FormControlLabel, Checkbox} from "@mui/material"
import {useSelector} from 'react-redux'
import todoCardTitle from '../../utils/todoCardTitle'
import { useEffect, useState } from "react"
import useStoredTodos from "../../utils/customHook/useStoredTodos"
import TodoContent from '../atoms/TodoContent'

const TodoCard = ({todoDate})=> {
    console.log("todo card rerendering")
    console.log(`date is ${todoDate}`)
    const cardTitle = todoCardTitle(todoDate)

    return (
        <Card variant="outlined" className="todo-card">
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