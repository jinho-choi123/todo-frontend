import { Badge, Card, Typography, Button, Chip, Modal, Box } from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from "react";
import ContentDialog from "./ContentDialog.js";

const ContentBox = ({todo}) => {
    const [openModal, setOpenModal] = useState(false)
    const [content, setContent] = useState(todo.content )
    const status = todo.status 
    const id = todo.id

    const handleOpen = () => {
        setOpenModal(true)
    }
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Card variant="outlined" className="contentBox" key={id}>
                <Typography align="center" fontSize={20} onClick={handleOpen} pt={1} pb={1}>
                    {content}
                </Typography>
                <ContentDialog setContent={setContent} content={content} todoId={id} open={openModal} handleClose={handleClose}/>
        </Card>
    )
}

export default ContentBox