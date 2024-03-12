import Task from "../models/task.js";

export const addTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    return res.status(200).json(newTask);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const userId = req.query.userId;
    const task = await Task.find({ user: userId });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const detailTaskView = async (req, res) => {
  try {
    const taskId = req.query.taskId;
    const taskDetails = await Task.findById({ _id: taskId });
    return res.status(200).json(taskDetails);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.body.id);
    if (!task) {
      return res.status(404).json({ msg: "task not found" });
    }
    await Task.findByIdAndUpdate(req.body.id, { $set: req.body });
    return res.status(200).json({ msg: `task updated successfully` });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.query.taskId);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    await Task.findByIdAndDelete(req.query.taskId);
    return res.status(200).json({ msg: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
