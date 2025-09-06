import React, { useState, useEffect } from "react";
import axios from "axios";
import { Atom } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Atom color="#3155cc" size="large" text="" textColor="" />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-semibold text-red-600 bg-red-100 px-6 py-3 rounded-lg">
          Error: {error.message || error}
        </p>
      </div>
    );

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="border rounded-xl bg-white p-4 shadow-md flex flex-col justify-between"
        >
          <h2 className="font-semibold text-lg text-gray-800 mb-1">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500 mb-2">@{user.username}</p>

          <p className="text-gray-600 text-sm mb-1">{user.email}</p>
          <p className="text-gray-600 text-sm mb-1">{user.phone}</p>
          <p className="text-gray-600 text-sm mb-3">{user.website}</p>

          <div className="bg-gray-100 p-2 rounded-md mb-3 text-sm">
            <p className="font-medium text-gray-700">{user.company.name}</p>
            <p className="text-gray-500 italic">"{user.company.catchPhrase}"</p>
          </div>

          <p className="text-sm text-gray-700 mb-3">
            📍 {user.address.city}, {user.address.street}, {user.address.suite}
          </p>

          <button
            onClick={() => navigate(`/user/${user.id}`)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default User;
