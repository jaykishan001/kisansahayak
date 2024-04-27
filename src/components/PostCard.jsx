import React from 'react'
import service from '../appwrite/config'

function PostCard({$id , product, expirty, bought, featuredImage, cartegory, quantity, }) {
  return (
    <div>
        <div className="flex justify-between">
            <div className="flex">
            <img src={service.getFilePreview(featuredImage)} alt="product" className="w-20 h-20" />
            <div className="ml-4">
                <h2>{product}</h2>
                <p>{cartegory}</p>
                <p>{quantity}</p>
            </div>
            </div>
            <div>
            <p>Expiry: {expirty}</p>
            <p>Bought: {bought}</p>
            </div>
        </div>
    </div>
  )
}

export default PostCard