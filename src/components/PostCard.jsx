import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

function PostCard({
  $id,
  product,
  expirty,
  bought,
  featuredImage,
  cartegory,
  quantity,
  price,
  userId, // Add userId as a prop
}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.userData);

  const handleSubmit = () => {
    dispatch(
      addToCart({
        $id,
        product,
        price,
        quantity,
        cartegory,
        expirty,
        bought,
        featuredImage,
      })
    );
  };

  // Check if the current user is the author of the post
  const isCurrentUserAuthor = currentUser && currentUser.$id === userId;

  return (
    
      <div className="p-4 border border-black ">
        <div className="flex items-center mb-4">
          <img
            src={service.getFilePreview(featuredImage)}
            alt="product"
            className="w-24 h-24 object-cover rounded-lg mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{product}</h2>
            <p className="text-gray-600">{cartegory}</p>
            <p className="text-gray-600">Quantity: {quantity}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">Expiry: {expirty}</p>
            <p className="text-gray-600">Bought: {bought}</p>
            <p className="text-gray-800 font-semibold">Price: ${price}</p>
          </div>
          {!isCurrentUserAuthor && ( // Render the button only if the current user is not the author
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
            >
              Buy Now
            </button>
          )}
          <Link to={`/post/${$id}`}>
        <button className="w-full bg-gray-200 p-2 rounded-md">Edit</button>
       </Link>
        </div>
      </div>
    
  );
}

export default PostCard;
