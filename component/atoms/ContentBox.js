import { Badge, Card, Typography, Button, Chip } from "@mui/material"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from "react";

const ContentBox = ({todo}) => {
    const content = todo.content 
    const status = todo.status 
    const id = todo.id

    const [openModal, setOpenModal] =useState(false)
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)


    return (
        <Card variant="outlined" className="contentBox" key={id}>
                <Typography align="center" fontSize={20} pt={1} pb={1}>
                    {content}
                </Typography>
        </Card>
    )
}

export default ContentBox