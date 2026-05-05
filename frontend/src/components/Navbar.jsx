import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar({ setPage }) {
  const { logout } = useContext(AuthContext);

  return (
    <div className="bg-blue-800 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow">
      <h2 className="text-2xl font-bold">Reporting Hub</h2>

      <div className="flex gap-3 mt-3 md:mt-0">
        <button onClick={() => setPage("dashboard")} className="hover:bg-blue-600 px-4 py-2 rounded">
          Dashboard
        </button>
        <button onClick={() => setPage("list")} className="hover:bg-blue-600 px-4 py-2 rounded">
          List
        </button>
        <button onClick={() => setPage("create")} className="hover:bg-blue-600 px-4 py-2 rounded">
          Create
        </button>
        <button
          onClick={() => {
            logout();
            setPage("login");
          }}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}