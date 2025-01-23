import react from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import RouterPage from "./components/router/RouterPage";
import Footer from "./components/home/Footer";
import AdminRouterPage from "./components/router/AdminRouterPage";
import AdminNavbar from "./components/admin/AdminNavbar";
import AdminSideBar from "./components/admin/AdminSideBar";
import UserNavbar from "./components/user/UserNavbar";
import UserRouterPage from "./components/router/UserRouterPage";
import UserSidebar from "./components/user/UserSidebar";
import ProtectedRoute from "./components/router/protectedRoute/ProtectedRoute";
import { UserProvider } from "./components/router/userContext/UserContext";


function App() {
  const loacation = useLocation();
  const isAdminRoute = loacation.pathname.startsWith("/admin");
  const isUserRoute = loacation.pathname.startsWith("/user");

  if (isAdminRoute) {
    return (
      <ProtectedRoute>
      <UserProvider>
      <>
        <AdminNavbar />
        <AdminSideBar />
        <AdminRouterPage />
      </>
      </UserProvider>
      </ProtectedRoute>
    )
  }else if (isUserRoute){
    return(
      <ProtectedRoute>
      <UserProvider>
      <>
      <UserNavbar/>
      <UserSidebar/>
      <UserRouterPage/>
      </>
      </UserProvider>
      </ProtectedRoute>
    )
  }

  return (
    <>
      <Navbar />
      <RouterPage />
      <Footer />
    </>
  );
}

export default App;
