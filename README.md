Authenticator App
This is an Authenticator App that handles user authentication with features such as Signup, Signin, and Logout. The app utilizes JWT-based authentication and stores user sessions. It is built with NestJS for the backend and React for the frontend.

Table of Contents
Backend Overview
Frontend Overview
Setup Instructions
Folder Structure
Features
Backend Overview
Technologies
NestJS: Framework for building scalable and maintainable server-side applications.
TypeScript: Type-safe JavaScript for improved code reliability.
Mongoose: ODM for MongoDB to handle data and schema models.
Passport.js: Middleware for handling authentication strategies (JWT).
JWT: JSON Web Tokens to securely transmit authentication information.
AppLogger: Custom logger to track application events and logs.
Modules & Libraries Used
User Module: Handles user data management, including signup and signin functionality.
Auth Module: Manages authentication logic, including JWT-based sign-in and session handling.
Logger Module: Logs application-level events for debugging, errors, and general logging.
Session Handling: express-session is used for session management, storing JWT in the session for user authentication.
JWT Strategy: Passport-based JWT authentication is used to validate users via a token stored in the session.
Authentication Flow
Signup:

Users can register with their email and password.
On successful signup, a JWT token is generated and sent back to the frontend.
The token is stored in the session to maintain the authenticated state.
Signin:

The user submits their credentials (email and password).
If the credentials are valid, a JWT token is returned and stored in the session.
The user is authenticated and granted access to protected routes.
Logout:

The user logs out, which clears the JWT token stored in the session.
Logging Integration
AppLogger Module:
Custom logging class based on ConsoleLogger from NestJS.
Used for logging important events, errors, and debugging information.
Configurable log levels (log, error, debug).
Frontend Overview
Technologies
React: JavaScript library for building user interfaces, especially SPAs.
TypeScript: A type-safe superset of JavaScript.
Styled Components: CSS-in-JS library to style components.
Ant Design (antd): React UI library with a rich set of components.
Axios: HTTP client for making API requests, including authentication requests.
CRACO: Configuration override for Create React App (CRA) to customize without ejecting.
Features
Login Page:

A form for users to input credentials (email and password).
On submission, the user is authenticated using the API (via JWT).
The token is stored in local storage to persist the user's logged-in state.
Signup Page:

Allows new users to register by providing their email and password.
Upon successful signup, the backend generates a JWT token and sends it to the frontend.
Dashboard Page:

Displays a personalized dashboard after successful authentication.
Includes a logout button that clears the user's session and JWT token.
Custom Hooks
useLocalStorage: Manages local storage items (save, retrieve, remove).
useSessionStorage: Works similarly to useLocalStorage, but with session storage.
useEffectOnce: Ensures that useEffect runs only once during component mount.
useDebounce: Used for debouncing user input or API requests (included for testing purposes).
Setup Instructions
Backend Setup (NestJS)
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <project-directory>
Install Dependencies:

Ensure you have Node.js and npm installed.
bash
Copy code
npm install
Environment Configuration:

Create a .env file in the root directory with the following contents:
makefile
Copy code
JWT_SECRET=your-jwt-secret-key
DATABASE_URI=mongodb://localhost:27017/authenticator
LOG_LEVEL=debug
BASE_URL=api/v1
PORT=5001
Run the Backend:

bash
Copy code
npm run start:dev
Frontend Setup (React)
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <project-directory>
Install Dependencies:

bash
Copy code
npm install
Environment Configuration:

Create a .env file in the root directory with the following contents:
arduino
Copy code
REACT_APP_BASE_ENDPOINT=http://localhost:5001
Run the Frontend:

bash
Copy code
npm start
This will start the React application on http://localhost:3000.

Folder Structure
Backend (NestJS)
plaintext
Copy code
src/
│
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── strategy/
│   │   └── jwt.strategy.ts
│   └── dto/
│       └── signin.dto.ts
│
├── user/
│   ├── user.model.ts
│   └── user.interface.ts
│
├── logger/
│   ├── logger.service.ts
│   └── logger.module.ts
│
├── main.ts
├── app.module.ts
└── config/
    └── config.module.ts
Frontend (React)
plaintext
Copy code
src/
│
├── components/
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Dashboard.tsx
│
├── hooks/
│   ├── useLocalStorage.ts
│   ├── useSessionStorage.ts
│   ├── useEffectOnce.ts
│   └── useDebounce.ts
│
├── services/
│   └── api/
│       └── axios.ts
│   └── userService.ts
├── App.tsx
└── index.tsx
Features
Authentication:

Signup, signin, and logout functionality using JWT tokens.
Session management using JWT stored in sessions.
Custom hooks to handle session storage and local storage for authentication persistence.
Dashboard:

A personalized dashboard that is shown upon successful login.
Logout functionality to end the session and clear the JWT token.
Custom Hooks:

useLocalStorage and useSessionStorage simplify data persistence.
useEffectOnce ensures that side effects are run only once.
useDebounce helps in debouncing API calls or user inputs.
