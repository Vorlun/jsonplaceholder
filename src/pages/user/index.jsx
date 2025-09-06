import { Atom } from "react-loading-indicators";
import UserView from "../../components/userView";
import useFetch from "../../hooks/useFetch";
import { memo } from "react";

const User = () => {
  const { data: users, loading, error } = useFetch("users");

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

  return <UserView users={users} />;
};

export default memo(User);
