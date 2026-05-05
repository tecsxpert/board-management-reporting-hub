import { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const { token } = useContext(AuthContext);
  const [page, setPage] = useState("login");

  if (!token && page !== "login") {
    setPage("login");
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {token && <Navbar setPage={setPage} />}

      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "dashboard" && token && <Dashboard />}
      {page === "list" && token && <ListPage />}
      {page === "create" && token && <CreatePage />}
    </div>
  );
}