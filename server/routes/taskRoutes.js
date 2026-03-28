const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

module.exports = router;
