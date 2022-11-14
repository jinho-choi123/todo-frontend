import { FormControl, InputLabel,Button, Input, FilledInput, InputAdornment, IconButton, Box} from "@mui/material"
import {useState} from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

const LoginForm = () => {
    const [values, setValues] = useState({
        username: '',
        password1: '',
        password2: '',
        showPassword: false,
    })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

    const handleMouseDownPassword = (event) => {
      event.preventDefault()
    }

    return (
        <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1 },
        border: 1,
        display: 'flex',
        }}
        noValidate
        autoComplete="off"
      >
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input value={values.username} onChange={handleChange('username')}></Input>
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
            </FormControl>
            <IconButton>
                <LoginIcon/>
            </IconButton>
        </Box>
    )

}

export default LoginForm