import {Box, Checkbox, FormControlLabel, FormGroup} from '@mui/material'

const TodoList = ({todoData}) => {
    const todos = todoData.map(({title, status, date, id}) =>{
        console.log(title)
        return (<FormGroup>
            <FormControlLabel control={<Checkbox />} label={title}/>
        </FormGroup>)
    } )

    return (
        <Box>
            {todos}
        </Box>
    )
}

export default TodoList 