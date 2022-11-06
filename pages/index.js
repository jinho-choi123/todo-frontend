import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FormGroup, Checkbox, FormControlLabel, Grid } from '@mui/material';

const Home = () => {

  //dummy data로 채워넣기.
  const todoList = [
    {
      title: "meet with friends @1000 @Seoul",
      status: true,
      todoId: "1r3r2herh3r"
    }, {
      title: "study math @ 1200 @home",
      status: false,
      todoId: "1r3r2sdga3r"
    },
    {
      title: "play basketball with crew members @2000 @gym",
      status: false,
      todoId: "1r3rsdaf23r"
    },
  ];

  const onStatusChange = (event) => {
    console.log(event.target.id)
    console.log(event.target.checked)

  }

  const todos = todoList.map(({title, status, todoId}) => {
    if(status == true) {
      return <FormControlLabel  control={<Checkbox id={todoId} defaultChecked onChange={onStatusChange}/>} key={todoId} label={title}/>
    } else {
      return <FormControlLabel control={<Checkbox id={todoId} onChange={onStatusChange}/>} key={todoId} label={title}/>
    }
  })

  

  return (
    <Box>
      <Grid
      container
      >
        <Card sx={{minWidth:275}} variant="outlined">
          <CardContent>
            <Typography variant="h6" component="div" align='center'>
              Today
            </Typography>

            <FormGroup>
              {todos}
            </FormGroup>

          </CardContent>
        </Card>
      </Grid>
        
    </Box>
  )
}

export default Home