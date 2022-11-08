import TodoList from '../components/TodoList'
import todoData from '../components/dummyData';
const Test = () => {
    return (
        <div>
            <TodoList todoData={todoData}/>
        </div>
    )
}

export default Test