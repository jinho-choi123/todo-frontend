import { Card } from "@mui/material"
import ContentBox from "./ContentBox"

const ContentList = ({todos}) => {
    const todoList = todos.map(({content, date, status, _id}) => {
        return (
            <ContentBox todo={{content: content, status: status, id: _id}}/>
        )
    })
    return (
        <Card className="contentList">
            {todoList}
        </Card>
    )
}

export default ContentList