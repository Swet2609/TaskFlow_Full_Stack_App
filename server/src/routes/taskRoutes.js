const express = require("express");
const TaskController = require("../controllers/taskController");
const { authenticate } = require("../middleware/auth");

const router = express.Router();

// Protected routes (require authentication)
router.use(authenticate);

// Task routes
router.get("/", TaskController.getTasks);
router.post("/", TaskController.createTask);
router.put("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

module.exports = router;
