// Sample task controller
class TaskController {
  static async getTasks(req, res) {
    try {
      res.status(200).json({
        message: "Tasks retrieved successfully",
        tasks: [],
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createTask(req, res) {
    try {
      res.status(201).json({
        message: "Task created successfully",
        task: req.body,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateTask(req, res) {
    try {
      res.status(200).json({
        message: "Task updated successfully",
        task: req.body,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    try {
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TaskController;
