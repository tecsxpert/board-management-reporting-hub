import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const { token } = useContext(AuthContext);
  const [page, setPage] = useState("login");

  // Handle auth redirect
  useEffect(() => {
    if (!token) {
      setPage("login");
    } else {
      setPage("dashboard"); // auto redirect after login
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-indigo-50">

      {/* Navbar */}
      {token && (
        <Navbar setPage={setPage} currentPage={page} />
      )}

      {/* Pages */}
      <div className="p-4">
        {page === "login" && <LoginPage setPage={setPage} />}
        {page === "dashboard" && token && <Dashboard />}
        {page === "list" && token && <ListPage />}
        {page === "create" && token && <CreatePage />}
      </div>

    </div>
  );
}