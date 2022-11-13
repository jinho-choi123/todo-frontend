import { CardContent, Box, FormControlLabel, FormGroup, Checkbox, Button } from "@mui/material"
import { dateDiff } from "../../utils/dateUtils"
import genUid from "../../utils/uid"
import DeleteTodo from "./DeleteTodo"
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { dateCompare } from "../../utils/dateUtils"

const TodoContent = ({todoDate}) => {
    const todos = useSelector(state => state.todoReducer.todos)

    const onStatusChange = (event) => {
        //change the data from store
        update({status: event.target.checked}, event.target.id)
      }
    
    return (
        <FormGroup className='content-wrapper'>
            <Box className='todo-content'>
            {todos.map(({title, date, status, _id}) => {
                if(dateCompare(new Date(date), todoDate)) {
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
                        }}})
                }
        
            </Box>
        </FormGroup>
    )
}

export default TodoContent