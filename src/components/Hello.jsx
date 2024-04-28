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
        product: card?.$id || "",
        status: card?.status || "active",
        category: card?.category || "",
        quantity: card?.quantity || "",
        bought: card?.bought || "",
        expiry: card?.expiry || "",
      },
    });
  const Submit = async (data) => {
    console.log(data);
    if (card) {
      const file = data.image[0]
        ? await service.uploadFile(data.image[0])
        : null;

      if (file) {
        service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updateCard(card?.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });

      if (dbPost) {
        navigate(`/card/${dbPost.$id}`);
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
          console.log(dbPost);
          navigate(`/card/${dbPost.$id}`);
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(Submit)}>
        <button type="submit" className="w-full">
          {card ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Postform;
