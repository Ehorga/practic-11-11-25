import { useState, useEffect, useRef } from 'react';
import Task from './Task/Task';
import tasks from './data';

function TasksList() {

  const isMounting = useRef(false);
  const [archiv, setArchiv] = useState([]);
  const [dataTasks, setDataTasks] = useState(tasks);
  const setDoneTask = (id) => {};

  useEffect(() => {
    if (isMounting.current === false) {
      isMounting.current = true
      const saveArchiv = JSON.parse(localStorage.getItem('archiv'));
      setArchiv(saveArchiv);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('archiv', JSON.stringify(archiv));
  }, [archiv]);

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
