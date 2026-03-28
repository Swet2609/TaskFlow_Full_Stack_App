# Server Documentation

## Overview

The TaskFlow backend server is a Node.js/Express API with MongoDB database integration, JWT authentication, and comprehensive error handling.

## 📦 Installation

```bash
cd server
npm install
cp .env.example .env
```

## 🚀 Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 🗄️ Database

### Connection
- **Type**: MongoDB
- **Default URL**: `mongodb://127.0.0.1:27017/taskflow`
- **Connection pooling**: Enabled by default

### Models

#### User Schema
```javascript
{
  name: String,
  email: String (unique),
  password: String,
  role: String (user|admin),
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### Task Schema
```javascript
{
  title: String (required),
  description: String,
  status: String (pending|in-progress|completed),
  priority: String (low|medium|high),
  userId: ObjectId (ref: User),
  dueDate: Date,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Authentication

### JWT Setup
- **Secret**: Configured in `.env` as `JWT_SECRET`
- **Expiration**: Default 7 days, configurable as `JWT_EXPIRE`
- **Token Format**: `Authorization: Bearer <token>`

### Middleware
- `authenticate`: Verifies JWT token and sets `req.user`
- `errorHandler`: Centralized error handling

## 🌐 API Endpoints

### Health Check
- `GET /` - Welcome message and version
- `GET /api/health` - Health check status

### Tasks (Protected Routes)
- `GET /api/tasks` - List user tasks with filters
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## ⚙️ Configuration Files

### config/constants.js
Central configuration management with environment variables:
- `PORT`: Server port
- `NODE_ENV`: Environment (development/production)
- `MONGODB_URI`: Database connection string
- `JWT_SECRET`: JWT signing key
- `CORS_ORIGIN`: Allowed CORS origin

## 📁 Project Structure

```
src/
├── config/          # Configuration and constants
├── controllers/     # Request handlers
├── models/         # Mongoose schemas
├── routes/         # API routes
├── middleware/     # Auth and error handling
├── services/       # Business logic
├── utils/          # Helpers (JWT, validation)
├── tests/          # Test suites
└── index.js        # Server entry point
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Structure
- Unit tests for utilities
- Integration tests for API endpoints
- Mock data for testing

## 📝 Error Handling

All errors return JSON with:
```javascript
{
  error: "Error message",
  timestamp: "2024-03-28T10:30:00Z",
  status: 400 // HTTP status code
}
```

## 🔍 Logging

- Console output for development
- Log levels: info, warn, error
- Request logging middleware included
- Timestamp on all logs

## 🚀 Deployment

### Environment Setup for Production
```env
NODE_ENV=production
JWT_SECRET=<strong-random-key>
MONGODB_URI=<production-db-uri>
CORS_ORIGIN=<production-frontend-url>
```

### Docker
```bash
docker build -t taskflow-api .
docker run -p 5000:5000 --env-file .env taskflow-api
```

## 📚 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **jsonwebtoken**: JWT handling
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables
- **nodemon**: Development server (dev)

## 🐛 Common Issues

### MongoDB Connection Failed
- Verify MongoDB is running
- Check connection string in `.env`
- Ensure network accessibility

### JWT Token Invalid
- Check token format (Bearer scheme)
- Verify JWT_SECRET matches token generation
- Check token expiration

### CORS Errors
- Update `CORS_ORIGIN` in `.env`
- Verify client URL matches
- Check header configuration

## 📞 Support

For issues or questions, create an issue on GitHub.
