import useDeleteTodo from "../../utils/customHook/useDeleteTodo"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import {useState} from 'react'

const DeleteTodo = ({todoId}) => {
    const {remove, derr, dloading} = useDeleteTodo()
    const [deleteStatus, setDeleteStatus] = useState(false)

    const onDeleteEvent = (event) => {
        event.preventDefault()
        const targetId = event.currentTarget.value;
        remove(targetId)
        setDeleteStatus(true)
    }

    return (
    <Button onClick={onDeleteEvent} value={todoId} endIcon={<CloseIcon/>}>
    </Button>
    )
}

export default DeleteTodo