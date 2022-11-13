import AddIcon from '@mui/icons-material/Add';
import {useState, useRef} from 'react'
import {Box, Button, Input} from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useAddTodo from '../../utils/customHook/useAddTodo';

const AddTodo = ({todoDate}) => {
    const todoInput = useRef();
    const [addStatus, setAddStatus] = useState(false)
    const ariaLabel = { 'aria-label': 'description' };
    const {add, err, loading} = useAddTodo();


    const clickBtn = (event) => {
        event.preventDefault()
        console.log("clicked add button")

        if(addStatus && (todoInput.current.value != '')) {
            //add data to todo card
            add({title: todoInput.current.value, date: todoDate})
            todoInput.current.value = ''
        } else {
            setAddStatus(true)
        }
        return 0
    }

    const onEnterPress = (event) => {
        if(event.key == 'Enter'&& addStatus && (todoInput.current.value != '')) {
            add({title: todoInput.current.value, date: todoDate})
            todoInput.current.value = ''
        } else if(event.key == 'Enter') {
            setAddStatus(true)
        }
            return 0
        }
    

    const clickAway = () => {

        // todoInput.value = ''
        setAddStatus(false)
    }

    return (
        <ClickAwayListener onClickAway={clickAway}>
            <Box align='center'>
                {addStatus? 
                <Input inputProps={ariaLabel} inputRef={todoInput} onKeyDown={onEnterPress}></Input>:
                <></>}
                <Button fullWidth={true} onClick={clickBtn}>
                    <AddIcon />
                </Button>
            </Box>
        </ClickAwayListener>
    )
}

export default AddTodo