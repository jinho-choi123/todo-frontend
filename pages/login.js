import {useState} from 'react'
import LoginForm from "../component/organisms/LoginForm";

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

    const handleMouseDownPassword = (event) => {
      event.preventDefault()
    }

    return (
        <LoginForm/>
    )
}

export default Login