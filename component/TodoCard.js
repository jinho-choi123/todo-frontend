import { CardContent, Card, Typography, FormGroup, FormControlLabel, Checkbox} from "@mui/material"
import store from './redux/store.js';

const TodoCard = ({cardTitle, todoDate})=> {
    const onStatusChange= (event) => {
        console.log(event.target.id)
        console.log(event.target.checked)
        //change the data from store
    
      }
    const todos = todoData.map(({title, status, todoId}) => {
        if(status == true) {
          return <FormControlLabel  control={<Checkbox id={todoId} defaultChecked onChange={onStatusChange}/>} key={todoId} label={title}/>
        } else {
          return <FormControlLabel control={<Checkbox id={todoId} onChange={onStatusChange}/>} key={todoId} label={title}/>
        }
      })

    return (
        <Card sx={{width:1/2}} variant="outlined">
            <CardContent>
                <Typography variant="h6" component="div" align="center">
                    {cardTitle}
                </Typography>
                <FormGroup>
                    {todos}
                </FormGroup>
            </CardContent>
        </Card>
    )
    
}

export default TodoCard