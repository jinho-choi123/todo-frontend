import { Box, Button, Modal, TextField } from "@mui/material"
import { useRef } from "react";
import useUpdateTodo from "../../utils/customHook/useUpdateTodo";
import { useDispatch } from "react-redux";
import useDeleteTodo from "../../utils/customHook/useDeleteTodo";

const ContentDialog = ({setContent, content, todoId, open, handleClose}) => {
    const textfieldRef = useRef()
    const dispatch = useDispatch()
    const {update, err, loading} = useUpdateTodo()
    const {remove, rerr, rloading} = useDeleteTodo()

    const modalStyle ={
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    };

    const deleteBtn = (event) => {
      event.preventDefault()
      dispatch(remove(todoId))
      handleClose()
    }

    const saveBtn = (event) => {
      event.preventDefault()
      const newContent = textfieldRef.current.value
      dispatch(update({content: newContent}, todoId))
      setContent(newContent)
      handleClose()
    }


    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <TextField inputRef={textfieldRef} fullWidth id="fullWidth" autoFocus={true} defaultValue={content}/>
          <Button onClick={deleteBtn}>Delete</Button>
          <Button onClick={saveBtn}>Save</Button>
        </Box>
        
      </Modal>
    )
}

export default ContentDialog