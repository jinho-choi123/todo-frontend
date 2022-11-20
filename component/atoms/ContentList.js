import { Box, Checkbox} from "@mui/material"
import { useDispatch } from "react-redux"
import useUpdateTodo from "../../utils/customHook/useUpdateTodo"
import ContentBox from "./ContentBox"

const ContentList = ({todos}) => {
    const dispatch = useDispatch()

    const {update, err, loading} = useUpdateTodo()

    const checkHandler = (event) => {
        const todoId = event.target.value;
        const status = event.target.checked;
        dispatch(update({status: status}, todoId))
    }


    const todoList = todos.map(({content, date, status, _id}) => {
        return (
            <Box className="contentBoxWrapper">
                <Checkbox value={_id} onClick={checkHandler} defaultChecked={status} />
                <ContentBox todo={{content: content, status: status, id: _id}}/>
            </Box>
        )
    })
    return (
        <Box className="contentList">
            {todoList}
        </Box>
    )
}

export default ContentList