import { CardContent, Card, Typography, FormGroup, FormControlLabel, Checkbox} from "@mui/material"
import todoCardTitle from '../../utils/todoCardTitle'
import TodoContent from '../atoms/TodoContent'
import AddTodo from '../atoms/AddTodo'

const TodoCard = ({todoDate})=> {
    const cardTitle = todoCardTitle(todoDate)

    return (
        <Card variant="outlined" className="todo-card">
            <CardContent>
                <Typography variant="h6" component="div" align="center">
                    {cardTitle}
                </Typography>
                <TodoContent todoDate={todoDate}/>
            </CardContent>

            <AddTodo todoDate={todoDate}/> 
        </Card>
    )
}

export default TodoCard