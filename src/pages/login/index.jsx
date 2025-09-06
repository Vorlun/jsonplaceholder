import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Login = () => {
  return (
    <div
      className="h-screen flex items-center justify-center 
      bg-gradient-to-br from-slate-900 via-gray-800 to-indigo-900 relative"
    >
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-indigo-300"
        >
          <AiFillHome size={22} />
          <span>Home</span>
        </Link>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
