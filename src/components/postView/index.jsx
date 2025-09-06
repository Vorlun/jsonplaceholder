import React from "react";
import { useNavigate } from "react-router-dom";

const postView = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-xl bg-white p-4 flex flex-col justify-between"
        >
          <h2 className="font-semibold text-lg text-gray-800 mb-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.body}</p>

          <div className="flex items-center justify-between text-sm">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-lg">
              User: {post.userId}
            </span>
            <button
              onClick={() => navigate(`/post/${post.id}`)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              View Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(postView);
