import { useContext } from "react";
import { addElipsis } from "../../../../Utils/CommonUtils";
import TaskModification from "./TaskModification";
import { AccountContext } from "../../../../Context";
import { detailTaskView } from "../../../../Service/api";

function List({ task }) {
  const formattedDate = new Date(task.createdAt).toLocaleDateString();
  const { setTaskDetails } = useContext(AccountContext);

  const handleDetailView = async () => {
    const data = await detailTaskView(task._id);
    setTaskDetails(data.data);
  };
  return (
    <div className="task-container" onClick={handleDetailView}>
      <div className="task-details">
        <h1>{task.title}</h1>
        <p>{addElipsis(task.task, 65)}</p>
      </div>
      <div className="task-btn">
        <TaskModification task={task} />
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}

export default List;
