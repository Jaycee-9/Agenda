import { Router } from "express";

import { userLogin } from "../Controllers/user-controller.js";
import {
  addTask,
  getTasks,
  editTask,
  deleteTask,
  detailTaskView,
} from "../Controllers/task-controller.js";
const router = Router();

router.post("/login", userLogin);
router.post("/addtask", addTask);

router.get("/tasks", getTasks);
router.get("/detailview", detailTaskView);

router.put("/tasks/edit", editTask);
router.delete("/tasks/delete", deleteTask);
export default router;
