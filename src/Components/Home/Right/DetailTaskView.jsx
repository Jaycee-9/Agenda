import { useContext } from "react";
import { AccountContext } from "../../../Context";

function DetailTaskView() {
  const { taskDetails } = useContext(AccountContext);

  const formatISTDate = (dateString) => {
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return new Date(dateString).toLocaleString("en-IN", options);
  };

  return (
    <div className="detail-task-view">
      <h1>Details of the agenda</h1>
      <h2> {taskDetails.title}</h2>
      <h4>{taskDetails.task}</h4>
      <p>{formatISTDate(taskDetails.updatedAt)}</p>
    </div>
  );
}

export default DetailTaskView;
