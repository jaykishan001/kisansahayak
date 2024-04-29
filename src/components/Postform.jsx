import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

import service from "../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Postform({ post }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        product: post?.$id || "",
        status: post?.status || "active",
        category: post?.category || "",
        quantity: post?.quantity || "",
        bought: post?.bought || "",
        expiry: post?.expiry || "",
      },
    });
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData);

  const Submit = async (data) => {
    setLoading(true);
    if (post) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;
      if (file) {
        service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updateCard(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createCard({ ...data, userId: user?.$id });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "product") {
        setValue("slug", slugTransform(value.product), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(Submit)}
      className="flex flex-wrap pl-[35%] pt-10 bg-[#FEF7E1]"
    >
      <div className=" px-2">
        <Input
          label="Product Name"
          placeholder="product name"
          className="mb-4 "
          {...register("product", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
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
          {...register("image", { required: !post })}
        />
        <Input
          label="Price"
          placeholder=""
          className="mb-4"
          {...register("price", { required: true })}
        />
        <Input
          label="Total Quantity"
          placeholder="Quantity"
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

        {loading && <p>submitting....</p>}

        <button
          type="submit"
          className="w-full border border-black p-2 rounded-lg bg-orange-500"
        >
          {post ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default Postform;
