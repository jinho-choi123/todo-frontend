import { Input, Card } from "@mui/material"

const AddBox = ({content, setContent, enterPress}) => {
    const onInputChange = (event) => {
        setContent(event.target.value)
    }

    return (
        <Card variant="outlined" className="contentBox" key={-1}>
            <Input disableUnderline={true} fontSize={20} className="addBox" value={content} onKeyDown={enterPress} onChange={onInputChange} fullWidth={true}>
            </Input>
        </Card>
    )
}

export default AddBox