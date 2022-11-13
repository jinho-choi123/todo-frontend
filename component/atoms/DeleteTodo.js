import useDeleteTodo from "../../utils/customHook/useDeleteTodo"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";

const DeleteTodo = ({todoId}) => {
    const {remove, derr, dloading} = useDeleteTodo()

    const onDeleteEvent = (event) => {
        const targetId = event.currentTarget.value;
        remove(targetId)
    }

    return (
    <Button onClick={onDeleteEvent} value={todoId}>
        <CloseIcon className='remove-icon'/>
    </Button>)
}

export default DeleteTodo