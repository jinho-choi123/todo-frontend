import { Card, Typography } from "@mui/material"

const ContentBox = ({todo}) => {
    const content = todo.content 
    const status = todo.status 
    const id = todo.id
    return (
        <Card variant="outlined" className="contentCard" key={id}>
            <Typography align="center" fontSize={20} pt={1} pb={1}>
                {content}
            </Typography>
        </Card>
    )
}

export default ContentBox