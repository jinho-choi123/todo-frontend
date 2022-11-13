import {Box, FormControlLabel, FormGroup, Checkbox} from "@mui/material"
import DeleteTodo from "./DeleteTodo"
import {useSelector} from 'react-redux'
import { dateCompare } from "../../utils/dateUtils"
import useUpdateTodo from '../../utils/customHook/useUpdateTodo';

const TodoContent = ({todoDate}) => {
    const todos = useSelector(state => state.todoReducer.todos)
    const {update, err, loading} = useUpdateTodo()

    const onStatusChange = (event) => {
        //change the data from store
        update({status: event.target.checked}, event.target.id)
      }
    const todoContent = todos.map(({title, date, status, _id}) => {
        if(dateCompare(new Date(date), todoDate)) {
                return (
                    <Box key={_id} className='content-box'>
                        <FormControlLabel control={<Checkbox 
                        defaultChecked={status}
                        onChange={onStatusChange}
                        id={_id}
                        />} 
                        label={title}
                        />
                        <DeleteTodo todoId={_id}/>
                    </Box>
                    )
                }})
    
    return (
        <FormGroup className='content-wrapper'>
            <Box className='todo-content'>
            {todoContent}
            </Box>
        </FormGroup>
    )
}

export default TodoContent