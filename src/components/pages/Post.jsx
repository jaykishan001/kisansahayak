import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/config";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getCard(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deleteCard(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  const [previewUrl, setPreviewUrl] = useState(null);
  console.log(post);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = await service.getFilePreview(post?.featuredImage);
        setPreviewUrl(url);
      } catch (error) {
        console.error("Error fetching file preview:", error);
      }
    };

    fetchData();
  }, [post?.featuredImage]);

  return post ? (
    <div className="py-8">
      <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
        <img
          src={previewUrl}
          alt={post.product}
          className="rounded-xl w-[500px]"
        />

        {isAuthor && (
          <div className="absolute right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <button className="mr-3">Edit</button>
            </Link>
            <button onClick={deletePost}>Delete</button>
          </div>
        )}
      </div>
      <div className="w-full mb-6">
        <h1 className="text-2xl font-bold">{post.product}</h1>
      </div>
      <div className="browser-css">{post.category}</div>
      <div className="browser-css">{post.price}</div>
      <div className="browser-css">{post.quantity}</div>
      <div className="browser-css">{post.bought}</div>
      <div className="browser-css">{post.expiry}</div>
    </div>
  ) : null;
}

export default Post;
