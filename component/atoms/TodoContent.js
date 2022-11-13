import { CardContent, Box, FormControlLabel, FormGroup, Checkbox, Button } from "@mui/material"
import useStoredTodos from "../../utils/customHook/useStoredTodos"
import { dateDiff } from "../../utils/dateUtils"
import useUpdateTodo from "../../utils/customHook/useUpdateTodo"
import genUid from "../../utils/uid"
import DeleteTodo from "./DeleteTodo"
import { useEffect } from "react"

const TodoContent = ({todoDate}) => {
    const getTodos = useStoredTodos()
    const {update, uerr, uloading}= useUpdateTodo()
    const todoData = getTodos(todoDate)

    const onStatusChange = (event) => {
        //change the data from store
        update({status: event.target.checked}, event.target.id)
      }
    const todoContent = todoData.map(({title, date, status, _id}) => {
        if(status == true) {
            return (<Box key={_id} className='content-box'>
                    <FormControlLabel control={<Checkbox 
                    defaultChecked 
                    onChange={onStatusChange}
                    id={_id}
                    />} 
                    label={title}
                    />
                    <DeleteTodo todoId={_id}/>
                </Box>)
        } else {
            return (
                <Box key={_id} className='content-box'>
                    <FormControlLabel control={<Checkbox 
                    onChange={onStatusChange}
                    id={_id}
                    />} 
                    label={title}
                    />
                    <DeleteTodo todoId={_id}/>
                </Box>)
        }

    })

    
    return (
        <FormGroup className='content-wrapper'>
            <Box className='todo-content'>
            {todoContent}
            </Box>
        </FormGroup>
    )
}

export default TodoContent