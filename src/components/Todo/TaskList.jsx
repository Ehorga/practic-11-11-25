import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTaskIsDone } from "../../store/todoSlice";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";

const TasksList = () => {
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const showTask = (task) => (
    <li key={task.id}>
      <strong
        onClick={() => {
          dispatch(toggleTaskIsDone({ id: task.id }));
        }}
        style={{
          textDecoration: task.isDone && "line-through",
        }}
      >
        {task.content}
      </strong>

      <span onClick={()=>{
        dispatch(deleteTask({ id: task.id }));
      }}>
        <Icon path={mdiTrashCanOutline} size={0.7} />
      </span>
    </li>
  );

  return (
    <section>
      <h3>Tasks list</h3>

      <ol>{tasks.map(showTask)}</ol>
    </section>
  );
};

export default TasksList;
