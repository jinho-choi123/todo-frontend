import {Box} from "@mui/material"
import MenuBar from "../component/molecules/MenuBar";
import Authenticator from "../component/organisms/Authenticater";
import TodoCarousel from "../component/organisms/TodoCarousel";
const Home = () => {

    return (
    <Box>
        <Authenticator>
            <MenuBar/>
            <TodoCarousel/>
        </Authenticator>
    </Box>
    )
}

export default Home