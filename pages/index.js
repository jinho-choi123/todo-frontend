import {Box, Grid} from '@mui/material';
import TodoCard from '../component/TodoCard'
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


  return (
    <Box>
      <Grid
      container
      spacing={2}
      >
        <Grid item xs={4}>
        <TodoCard cardTitle="Yesterday" todoList={todoList}/>
        </Grid>
        <Grid item xs={4}>
        <TodoCard cardTitle="Today" todoList={todoList}/>
        </Grid>
        <Grid item xs={4}>
        <TodoCard cardTitle="Tomorrow" todoList={todoList}/>
        </Grid>
      </Grid>
        
    </Box>
  )
}

export default Home