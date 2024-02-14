import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  const dispatch = useDispatch();

  const renderStarIcons = () => {
    const stars = [];
    for (let i = 0; i < rating.rate; i++) {
      stars.push(<StarIcon key={i} className="h-5 text-yellow-500" />);
    }
    return stars;
  };

  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image, rating };

    //Sending to product as an action to the REDUX store
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img
        src={image}
        alt="product image"
        className="h-64 w-64 object-fill self-center"
      />
      <h4 className="my-3 line-clamp-2">{title}</h4>

      <div className="flex">{renderStarIcons()}</div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">${price}</div>

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}
