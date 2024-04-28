import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import service from "../appwrite/config";
import { useSelector } from "react-redux";

function Postform({ card }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = await service.getFilePreview(card?.featuredImage);
        setPreviewUrl(url);
      } catch (error) {
        console.error("Error fetching file preview:", error);
      }
    };

    fetchData();
  }, [card?.featuredImage]);
  const user = useSelector((state) => state.auth.userData);

  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        product: card?.product || "",
        status: card?.status || "active",
        categrory: card?.category || "",
        quantity: card?.quantity || "",
        bought: card?.bought || "",
        expiry: card?.expiry || "",
      },
    });
  const Submit = async (data) => {
    if (card) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;
      if (file) {
        service.deleteFile(post.featuredImage);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(Submit)}>
        <Input
          label="Product Name"
          placeholder="apples"
          className="mb-4"
          {...register("product", { required: true })}
        />
        <Input
          label="Category"
          placeholder=""
          className="mb-4"
          {...register("category", { required: true })}
        />
        <Input
          type="file"
          label="Image"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !card })}
        />
        <Input
          label="Price"
          placeholder=""
          className="mb-4"
          {...register("price", { required: true })}
        />
        <Input
          label="Total Quantity"
          placeholder="apples"
          className="mb-4"
          {...register("quantity", { required: true })}
        />
        <Input
          label="Date Bought"
          type="date"
          placeholder=""
          className="mb-4"
          {...register("bought", { required: false })}
        />
        <Input
          label="Date Expired"
          type="date"
          placeholder=""
          className="mb-4"
          {...register("expiry", { required: false })}
        />
        <button type="submit" className="w-full">
          {card ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Postform;
