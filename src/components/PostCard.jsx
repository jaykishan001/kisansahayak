import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from "../store/cartSlice"

function PostCard({
  $id,
  product,
  expirty,
  bought,
  featuredImage,
  cartegory,
  quantity,
  price,
}) {

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addToCart())
  }
  return (
    <Link
      to={`/post/${$id}`}
      className="block w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-white mb-6"
    >
      <div className="p-4">
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
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
