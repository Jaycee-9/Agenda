import { useContext, useState } from "react";
import { addTask } from "../../../../Service/api";
import TaskList from "../Bottom/TaskList";
import { AccountContext } from "../../../../Context";

const initialTask = {
  title: "",
  task: "",
  user: "",
};

function TaskInput() {
  const [input, setInput] = useState(initialTask);
  const { user } = useContext(AccountContext);
  const onInputChange = (evt) =>
    setInput({ ...input, [evt.target.name]: evt.target.value, user: user.sub });

  const handleTask = async (evt) => {
    evt.preventDefault();
    setInput(initialTask);
    await addTask(input);
  };

  return (
    <div className="middle">
      <div className="input-task-body">
        <form onSubmit={handleTask}>
          <input
            type="text"
            placeholder="Title"
            required
            name="title"
            value={input.title}
            onChange={onInputChange}
          />
          <input
            type="text"
            placeholder="Task"
            required
            name="task"
            value={input.task}
            onChange={onInputChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <TaskList />
    </div>
  );
}
export default TaskInput;
