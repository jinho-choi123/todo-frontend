import {Box, Alert, Stack} from "@mui/material"

const ErrorShowup = ({status, msg}) => {
    return (
        <Box mt={2}>
            {status?<Alert severity="error">{msg}</Alert>:''}
        </Box>
    )
}

export default ErrorShowup