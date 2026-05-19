import Counter from "../components/Counter/Counter";
import TaskForm from "../components/Todo/TaskForm";
import TasksList from "../components/Todo/TaskList";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Counter/>
            <hr/>
            <TaskForm/>
            <hr />
            <TasksList/>
        </div>
    );
}

export default HomePage;
