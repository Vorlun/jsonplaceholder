import { Atom } from "react-loading-indicators";
import PostView from "../../components/postView";
import useFetch from "../../hooks/useFetch";
import { memo } from "react";

const Home = () => {
  const {data:posts, loading, error} = useFetch("posts")

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

  return <PostView posts={posts} />;
};

export default memo(Home);
