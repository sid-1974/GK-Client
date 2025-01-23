import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from '../../pages/userDashboard/Profile/UserProfile';
import UserDashboard from '../../pages/userDashboard/UserDashboard';
import MyMatches from '../../pages/userDashboard/my-matches/MyMatches';
import MyIntrest from '../../pages/userDashboard/intrest/MyIntrest';
import UserView from '../../pages/userDashboard/viewAll/UserView';
import UserSearch from '../../pages/userDashboard/search/UserSearch';
import ProtectedRoute from './protectedRoute/ProtectedRoute';
import { AuthProvider } from './authContext/AuthContext';
import { UserProvider } from './userContext/UserContext';

function UserRouterPage() {
  return (
    <div>
      <AuthProvider>
        <UserProvider>
      <Routes>
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/my-matches"
          element={
            <ProtectedRoute>
              <MyMatches />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/my-intrest"
          element={
            <ProtectedRoute>
              <MyIntrest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/view-all"
          element={
            <ProtectedRoute>
              <UserView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/search"
          element={
            <ProtectedRoute>
              <UserSearch />
            </ProtectedRoute>
          }
        />
      </Routes>
      </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default UserRouterPage;
