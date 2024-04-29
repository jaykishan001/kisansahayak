import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const Allpost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    setLoading(true);
    setError(null);

    service
      .getCards([])
      .then((posts) => {
        setLoading(false);
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred while fetching posts.");
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allpost;
