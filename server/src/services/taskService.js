// Sample task service with business logic
class TaskService {
  static async createTask(taskData) {
    // Validate and sanitize
    if (!taskData.title) {
      throw new Error("Task title is required");
    }
    return taskData;
  }

  static async updateTask(id, updateData) {
    // Validate update data
    return updateData;
  }

  static async deleteTask(id) {
    return { id };
  }

  static async getTasksByUser(userId, filters = {}) {
    // Build query with filters
    const query = { userId };
    if (filters.status) query.status = filters.status;
    if (filters.priority) query.priority = filters.priority;
    return query;
  }
}

module.exports = TaskService;
