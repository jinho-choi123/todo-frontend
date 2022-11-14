import { FormControl, InputLabel, Input } from "@mui/material"
import { Box } from "@mui/system"
import {useState} from 'react'

const Login = () => {
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

    return (
        <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
            Welcome to TODO APP
            <FormControl>
                <InputLabel htmlFor="component-simple">Username</InputLabel>
                <Input value={values.username}></Input>
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Box>
    )
}

export default Login