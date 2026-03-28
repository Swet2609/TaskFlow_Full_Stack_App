const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: "TaskFlow API Running",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    database: "demo mode (MongoDB disabled for now)",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy", 
    timestamp: new Date(),
  });
});

app.get("/api/tasks", (req, res) => {
  res.status(200).json({
    message: "TaskFlow API - Demo Mode",
    tasks: [
      { id: 1, title: "Sample Task 1", status: "pending", priority: "high" },
      { id: 2, title: "Sample Task 2", status: "in-progress", priority: "medium" }
    ]
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.path,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ API Health: http://localhost:${PORT}/api/health`);
  console.log(`✓ API Tasks: http://localhost:${PORT}/api/tasks`);
});

module.exports = app;
