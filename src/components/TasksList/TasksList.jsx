import { useState } from "react";

import tasks from "./data";
import Task from './../Task/Task';

function TasksList() {
  const [dataTasks, setDataTasks] = useState(tasks);

  const setDoneTask = (id) => {
    const newTasks =dataTasks.map((task) =>{
      if (task.id === id) {
        return {...false, isDone: true};
      }
      return task
    })
   setDataTasks(newTasks)
  };

  return (
    <>
      {dataTasks.map((task) => (
        <Task
          key={task.id}
          dataTask={task}
          setDoneTask={setDoneTask}
        />
      ))}
    </>
  );
}

export default TasksList;
