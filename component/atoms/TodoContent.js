import { CardContent, FormControlLabel, FormGroup, Checkbox } from "@mui/material"
import useStoredTodos from "../../utils/customHook/useStoredTodos"
import { dateDiff } from "../../utils/dateUtils"

const TodoContent = ({todoDate}) => {
    const todoData = useStoredTodos(todoDate)

    const onStatusChange= (event) => {
        console.log(event.target.id)
        console.log(event.target.checked)
    
        //change the data from store
    
      }

    const todoContent = todoData.map(({title, date, status, _id}) => {
        if(dateDiff(new Date(date), todoDate) == 0) {
            console.log(date)
            if(status == true) {
                return <FormControlLabel control={<Checkbox id={_id} defaultChecked onChange={onStatusChange}/>}/>
            } else {
                return <FormControlLabel control={<Checkbox id={_id} onChange={onStatusChange}/>} key={_id} label={title}/>
            }
        } else {
            return 
        }
    })

    return (
        <FormGroup>
            {todoContent}
        </FormGroup>
    )
}

export default TodoContent