import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  /* MOCK REGISTERED USERS */
  const users = [
    {
      email: "admin@gmail.com",
      password: "1234",
    },
    {
      email: "user@gmail.com",
      password: "5678",
    },
  ];

  const handleLogin = (e) => {

    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const registeredUser = users.find(
      (u) => u.email === email
    );

    if (!registeredUser) {
      setError("User not registered. Please register first.");
      return;
    }

    if (registeredUser.password !== password) {
      setError("Invalid password");
      return;
    }

    /* SUCCESS */
    login("demo-token");

    setError("");

    alert("Login successful ✅");

    navigate("/dashboard");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Glow Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative animate-fadeIn bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/30"
      >

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Reporting Hub
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Secure login to manage reports
        </p>

        {/* Email */}
        <div className="mb-4">

          <label className="text-sm text-gray-600">
            Email
          </label>

          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-white focus-within:ring-2 focus-within:ring-indigo-300">

            <span className="text-gray-400 mr-2">
              📧
            </span>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

        </div>

        {/* Password */}
        <div className="mb-4">

          <label className="text-sm text-gray-600">
            Password
          </label>

          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-white focus-within:ring-2 focus-within:ring-indigo-300">

            <span className="text-gray-400 mr-2">
              🔒
            </span>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full outline-none text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

        </div>

        {/* Error Message */}
        {error && (

          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">

            {error}

          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Login
        </button>

        

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Board Management Reporting Hub
        </p>

      </form>

    </div>
  );
}