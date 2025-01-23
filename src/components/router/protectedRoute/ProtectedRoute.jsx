import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authContext/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem('token');

  if (!isAuthenticated && !token) {
    // Redirect to login if not authenticated and no token in storage
    return <Navigate to="/login" replace />;
  }

  // Render children if authenticated or token exists
  return children;
}

export default ProtectedRoute;
