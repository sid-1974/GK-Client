import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./components/router/authContext/AuthContext.jsx";
import { UserProvider } from "./components/router/userContext/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </AuthProvider>
  </StrictMode>
);
