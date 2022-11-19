import { CardContent, Card, Typography, FormGroup, FormControlLabel, Checkbox} from "@mui/material"
import AddTodo from '../atoms/AddTodo'
import useTodoData from "../../utils/customHook/useTodoData"
import ContentList from "../atoms/ContentList"
import { dateFormatter } from "../../utils/dateUtils"
import { useEffect, useState } from "react"

const TodoCard = ({todoDate})=> {
    const filterTodos = useTodoData()
    const [cardTitle, setCardTitle] = useState('')
    const todoData = filterTodos(todoDate)
    useEffect(() => {
        setCardTitle(dateFormatter(todoDate))
    }, [todoDate])

    return (
        <Card variant="outlined" className="todo-card">
            <CardContent>
                <Typography variant="h6" component="div" align="center">
                    {cardTitle}
                </Typography>
                <ContentList todos={todoData}/>
            </CardContent>

            <AddTodo todoDate={todoDate}/> 
        </Card>
    )
}

export default TodoCard