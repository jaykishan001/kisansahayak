import React, { useEffect, useState } from "react";
import service from "../../appwrite/config";
import { useSelector } from "react-redux";
import PostCard from "../PostCard";

const Buy = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    service
      .getCards([])
      .then((posts) => {
        setLoading(false);
        if (posts) {
          const filteredPosts = posts.documents.filter(
            (post) => post.userId !== user.$id // Filter out posts where userId is not equal to the current user's ID
          );
          setPosts(filteredPosts);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError("An error occurred while fetching posts.");
        console.error(error);
      });
  }, [user]);
  console.log(posts);

  if (loading) {
    return <div>Loading...</div>;
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

export default Buy;
