import { AppBar, Box, Button, Toolbar, Typography} from "@mui/material"
import { useDispatch } from "react-redux"
import useFetchUser from "../../utils/customHook/useFetchUser"
import { useSelector } from "react-redux"
import useLogout from "../../utils/customHook/useLogout"

const MenuBar = () => {
    const dispatch = useDispatch()
    const fetchUser = useFetchUser()
    const logoutUser = useLogout()
    dispatch(fetchUser())
    const username = useSelector(state => state.authReducer.username)

    const logout = (event) => {
        event.preventDefault()
        dispatch(logoutUser())
    }

    return (
        <Box sx={{flexGrow: 1}} >
            <AppBar position="static" className="menuBar">
            <Toolbar variant="dense" >
            <Typography variant="h6" color="inherit" component="div">
                Hello, {username}
            </Typography>
            <Button onClick={logout}>Logout</Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MenuBar