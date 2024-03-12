import { useEffect, useContext } from "react";
import { getTasks } from "../../../../Service/api";
import { AccountContext } from "../../../../Context/index";
import List from "./List";

function TaskList() {
  const { setTask, task, user } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks(user.sub);
      setTask(data.data);
    };
    fetchData();
  }, [setTask, user.sub, task]);

  return (
    <div className="text-main">
      <h3>Agenda</h3>
      <ul>
        {task.length > 0 ? (
          task.map((task) => (
            <li key={task._id}>
              <List task={task} />
            </li>
          ))
        ) : (
          <h4>So empty. Add something to the agenda to make your day!</h4>
        )}
      </ul>
    </div>
  );
}
export default TaskList;
