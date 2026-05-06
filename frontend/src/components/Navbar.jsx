import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar({ setPage, currentPage }) {
  const { logout } = useContext(AuthContext);

  const navItem = (page, label, icon) => (
    <button
      onClick={() => setPage(page)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition shadow ${
        currentPage === page
          ? "bg-indigo-700 text-white"
          : "bg-indigo-600 text-white hover:bg-indigo-500"
      }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );

  return (
    <div className="bg-white/80 backdrop-blur-md border-b shadow-sm px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      
      <h2 className="text-2xl font-bold text-indigo-600">
        📊 Reporting Hub
      </h2>

      <div className="flex gap-3 mt-3 md:mt-0">
        {navItem("dashboard", "Dashboard", "📈")}
        {navItem("list", "Reports", "📋")}
        {navItem("create", "Create", "➕")}

        <button
          onClick={() => {
            logout();
            setPage("login");
          }}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}