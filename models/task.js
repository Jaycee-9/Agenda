import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("Task", taskSchema);
export default Task;
