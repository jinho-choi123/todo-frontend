import {Box} from "@mui/material"
import Authenticator from "../component/organisms/Authenticater";
import TodoCarousel from "../component/organisms/TodoCarousel";
const Test = () => {

    return (
    <Box>
        <Authenticator>
            <TodoCarousel/>
        </Authenticator>
    </Box>
    )
}

export default Test