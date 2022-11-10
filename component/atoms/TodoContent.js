import { CardContent, Box, FormControlLabel, FormGroup, Checkbox, Typography } from "@mui/material"
import useStoredTodos from "../../utils/customHook/useStoredTodos"
import { dateDiff } from "../../utils/dateUtils"
import useUpdateTodo from "../../utils/customHook/useUpdateTodo"

const TodoContent = ({todoDate}) => {
    const todoData = useStoredTodos(todoDate)
    const {update, err, loading}= useUpdateTodo()

    const onStatusChange= (event) => {
        //change the data from store
        update({status: event.target.checked}, event.target.id)
      }

    const todoContent = todoData.map(({title, date, status, _id}) => {
        if(dateDiff(new Date(date), todoDate) == 0) {
            if(status == true) {
                return (<Box key={_id}>
                        <FormControlLabel control={<Checkbox 
                        defaultChecked 
                        onChange={onStatusChange}
                        id={_id}
                        />} 
                        label={title}
                        />
                    </Box>)
            } else {
                return (
                    <Box key={_id}>
                        <FormControlLabel control={<Checkbox 
                        onChange={onStatusChange}
                        id={_id}
                        />} 
                        label={title}
                        />
                    </Box>)
            }
        } else {
            return 
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