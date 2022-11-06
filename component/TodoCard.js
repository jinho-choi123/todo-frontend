import { CardContent, Card, Typography, FormGroup, FormControlLabel, Checkbox} from "@mui/material"

const TodoCard = ({cardTitle, todoList})=> {
    const onStatusChange= (event) => {
        console.log(event.target.id)
        console.log(event.target.checked)
    
        //change the data from store
    
      }
    const todos = todoList.map(({title, status, todoId}) => {
        if(status == true) {
          return <FormControlLabel  control={<Checkbox id={todoId} defaultChecked onChange={onStatusChange}/>} key={todoId} label={title}/>
        } else {
          return <FormControlLabel control={<Checkbox id={todoId} onChange={onStatusChange}/>} key={todoId} label={title}/>
        }
      })

    return (
        <Card sx={{minWidth:275}} variant="outlined">
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