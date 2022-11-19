import { CardContent, Card, Typography, Box, Button, ClickAwayListener} from "@mui/material"
import useTodoData from "../../utils/customHook/useTodoData"
import ContentList from "../atoms/ContentList"
import { dateFormatter } from "../../utils/dateUtils"
import { useEffect, useState } from "react"
import useAddTodo from "../../utils/customHook/useAddTodo"
import { useDispatch } from "react-redux"
import AddBox from "../atoms/AddBox"

const TodoCard = ({todoDate})=> {
    const filterTodos = useTodoData()
    const [cardTitle, setCardTitle] = useState('')
    const todoData = filterTodos(todoDate)
    useEffect(() => {
        setCardTitle(dateFormatter(todoDate))
    }, [todoDate])

    //add todo feature
    const dispatch = useDispatch()
    const [addStatus, setAddStatus] = useState(false)
    const [addingContent, setAddingContent] = useState('')
    const {addTodo, err, loading} = useAddTodo()

    const addTodoBtn = (event) => {
        event.preventDefault()
        if(addStatus && (addingContent != '')) {
            dispatch(addTodo({content: addingContent, date: todoDate}))
            setAddingContent('')
        } else {
            setAddStatus(true)
        }
    }
    const addTodoEnter = (event) => {
        if(event.key == 'Enter' && addStatus && (addingContent != '')) {
            dispatch(addTodo({content: addingContent, date: todoDate}))
            setAddingContent('')
        } else if(event.key == 'Enter'){
            setAddStatus(true)
        }
    }
    const clickAway = () => {
        setAddStatus(false)
    }

    return (
        <Card variant="outlined" className="todo-card" align="center">
            <CardContent>
                <Typography variant="h6" component="div" align="center">
                    {cardTitle}
                </Typography>
                {
                    addStatus?
                    <ClickAwayListener onClickAway={clickAway} pt={1} pb={1}>
                        <Box align="center" >
                            <AddBox enterPress={addTodoEnter} content={addingContent} setContent={setAddingContent}/>
                        </Box>
                    </ClickAwayListener>
                    :
                    <></>
                }
                <ContentList todos={todoData}/>
            </CardContent>
            <Button onClick={addTodoBtn}>plus</Button>
        </Card>
    )
}

export default TodoCard