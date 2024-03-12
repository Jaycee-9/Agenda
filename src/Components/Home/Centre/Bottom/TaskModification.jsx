import { Edit, ChecklistRtl } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../../Context";
import { editTask, deleteTask } from "../../../../Service/api";

function TaskModification({ task }) {
  const initialTask = {
    title: task.title,
    task: task.task,
    user: task.user,
    id: task._id,
  };
  const btnStyle = {
    margin: "10px",
    cursor: "pointer",
  };
  const dialogStyle = {
    width: "600px",
    height: "400px",
    padding: "20px",
    borderRadius: "40px",
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [input, setInput] = useState(initialTask);
  const { user, setTaskDetails } = useContext(AccountContext);

  const onInputChange = (evt) =>
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
      user: user.sub,
      id: task._id,
    });

  const taskEditApiCall = async (evt) => {
    evt.preventDefault();
    await editTask(input);
    setOpen(false);
  };

  const deleteTaskApi = async () => {
    await deleteTask(input.id);
    setTaskDetails({});
  };

  return (
    <div className="task-btn">
      <Edit sx={btnStyle} onClick={handleOpen} />
      <Dialog
        id="upload-dialog"
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: dialogStyle }}
      >
        <div className="edit-dialog-form">
          <form onSubmit={taskEditApiCall}>
            <h3>Adjust your Agenda.</h3>
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
            <button type="submit">Edit</button>
          </form>
        </div>
      </Dialog>
      <ChecklistRtl sx={btnStyle} onClick={deleteTaskApi} />
    </div>
  );
}
export default TaskModification;
