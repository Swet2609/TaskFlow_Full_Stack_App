# Client Documentation

## Overview

The TaskFlow frontend is a React 18 application with component-based architecture, context-based state management, and comprehensive error handling.

## 📦 Installation

```bash
cd client
npm install
cp .env.example .env
```

## 🚀 Running the Client

```bash
# Development mode
npm start

# Production build
npm run build

# Run tests
npm test
```

## 🏗️ Architecture

### Components
- **TaskCard**: Displays individual task with actions
- **TaskForm**: Form for creating/editing tasks
- Reusable, composable design

### Context API
- **AuthContext**: User authentication state
- Token management
- Login/logout functionality

### Custom Hooks
- **useAuth**: Access authentication context

### Services
- **api.js**: Centralized API client with Axios
- Request/response interceptors
- Automatic token injection

## 📁 Project Structure

```
src/
├── components/      # Reusable React components
│   ├── TaskCard.jsx
│   └── TaskForm.jsx
├── pages/          # Page components
│   ├── HomePage.jsx
│   └── TasksPage.jsx
├── services/       # API communication
│   └── api.js
├── hooks/          # Custom React hooks
│   └── useAuth.js
├── context/        # Context providers
│   └── AuthContext.js
├── __tests__/      # Component tests
├── App.js          # Root component
├── App.css         # Styles
└── index.js        # Entry point
```

## 🎨 Styling

### App.css Features
- Responsive grid layouts
- Component-specific styles
- Status and priority badges
- Button states and interactions
- Mobile-friendly design

### Design System
- Color scheme: Blue (#007bff), Green (#28a745), Red (#dc3545)
- Padding: 20px standard
- Border radius: 5-8px
- Box shadows: Subtle (2-4px)

## 🔐 Authentication Flow

1. User logs in via form
2. Server returns JWT token
3. Token stored in localStorage
4. Token injected in API headers via interceptor
5. On 401 response, token cleared and redirect to login

## 🌐 API Integration

### Available Endpoints

```javascript
// Tasks
taskAPI.getTasks(filters)
taskAPI.createTask(data)
taskAPI.updateTask(id, data)
taskAPI.deleteTask(id)

// Auth
authAPI.login(email, password)
authAPI.register(data)
authAPI.logout()
```

### Request/Response Handling
- Automatic token injection
- Error handling with 401 logout
- Base configuration per environment
- Timeout handling

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Examples
- Component rendering
- User interactions
- API calls mocking

## ⚙️ Configuration

### Environment Variables
- `REACT_APP_API_URL`: Backend API endpoint
- `REACT_APP_ENV`: Environment (development/production)

### Build Configuration
- ESLint: Code quality standards
- React Scripts: Build tooling
- Testing Library: Component testing

## 📱 Responsive Design

- Mobile-first approach
- CSS Grid for layouts
- Flexible container widths
- Touch-friendly buttons
- Mobile breakpoint: 768px

## 🚀 Production Build

```bash
# Create optimized build
npm run build

# Build output is in ./build directory
# Ready for deployment to static hosting
```

### Build Optimization
- Code splitting
- Component lazy loading
- CSS minification
- Asset optimization

## 🐛 Common Issues

### API Connection Issues
- Check `REACT_APP_API_URL` in `.env`
- Verify backend is running
- Check CORS configuration

### 401 Unauthorized
- Token may be expired
- Login again to refresh
- Check localStorage for authToken

### State Not Updating
- Use proper context hooks
- Check context provider wrapping App
- Verify state dispatch patterns

## 📞 Support

For issues or questions, create an issue on GitHub.
