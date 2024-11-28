# Authenticator App

This is an **Authenticator App** that handles user authentication with features such as **Signup**, **Signin**, and **Logout**. The app utilizes JWT-based authentication and stores user sessions. It is built with **NestJS** for the backend and **React** for the frontend.

## Table of Contents
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Features](#features)

---

## Backend Overview

### **Technologies**
- **NestJS**: Framework for building scalable and maintainable server-side applications.
- **TypeScript**: Type-safe JavaScript for improved code reliability.
- **Mongoose**: ODM for MongoDB to handle data and schema models.
- **Passport.js**: Middleware for handling authentication strategies (JWT).
- **JWT**: JSON Web Tokens to securely transmit authentication information.
- **AppLogger**: Custom logger to track application events and logs.

### **Modules & Libraries Used**
- **User Module**: Handles user data management, including signup and signin functionality.
- **Auth Module**: Manages authentication logic, including JWT-based sign-in and session handling.
- **Logger Module**: Logs application-level events for debugging, errors, and general logging.
- **Session Handling**: `express-session` is used for session management, storing JWT in the session for user authentication.
- **JWT Strategy**: Passport-based JWT authentication is used to validate users via a token stored in the session.

### **Authentication Flow**
1. **Signup**:
   - Users can register with their email and password.
   - On successful signup, a JWT token is generated and sent back to the frontend.
   - The token is stored in the session to maintain the authenticated state.
   
2. **Signin**:
   - The user submits their credentials (email and password).
   - If the credentials are valid, a JWT token is returned and stored in the session.
   - The user is authenticated and granted access to protected routes.

3. **Logout**:
   - The user logs out, which clears the JWT token stored in the session.

### **Logging Integration**
- **AppLogger Module**:
  - Custom logging class based on `ConsoleLogger` from NestJS.
  - Used for logging important events, errors, and debugging information.
  - Configurable log levels (`log`, `error`, `debug`).

---

## Frontend Overview

### **Technologies**
- **React**: JavaScript library for building user interfaces, especially SPAs.
- **TypeScript**: A type-safe superset of JavaScript.
- **Styled Components**: CSS-in-JS library to style components.
- **Ant Design (antd)**: React UI library with a rich set of components.
- **Axios**: HTTP client for making API requests, including authentication requests.
- **CRACO**: Configuration override for Create React App (CRA) to customize without ejecting.

### **Features**
1. **Login Page**:
   - A form for users to input credentials (email and password).
   - On submission, the user is authenticated using the API (via JWT).
   - The token is stored in local storage to persist the user's logged-in state.

2. **Signup Page**:
   - Allows new users to register by providing their email and password.
   - Upon successful signup, the backend generates a JWT token and sends it to the frontend.

3. **Dashboard Page**:
   - Displays a personalized dashboard after successful authentication.
   - Includes a logout button that clears the user's session and JWT token.

### **Custom Hooks**
- **useLocalStorage**: Manages local storage items (save, retrieve, remove).
- **useSessionStorage**: Works similarly to `useLocalStorage`, but with session storage.
- **useEffectOnce**: Ensures that `useEffect` runs only once during component mount.
- **useDebounce**: Used for debouncing user input or API requests (included for testing purposes).

---

## Setup Instructions

### **Backend Setup (NestJS)**

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
