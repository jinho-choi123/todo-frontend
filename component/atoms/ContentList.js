import { Box, Card } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import ContentBox from "./ContentBox"

const ContentList = ({todos}) => {
    const todoList = todos.map(({content, date, status, _id}) => {
        return (
            <ContentBox todo={{content: content, status: status, id: _id}}/>
        )
    })
    return (
        <Card>
            {todoList}
        </Card>
    )
}

export default ContentList