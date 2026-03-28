require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/taskflow",
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret_key_change_in_production",
  JWT_EXPIRE: process.env.JWT_EXPIRE || "7d",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
};
