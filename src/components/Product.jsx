import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  const renderStarIcons = () => {
    const stars = [];
    for (let i = 0; i < rating.rate; i++) {
      stars.push(<StarIcon key={i} className="h-5 text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <img src={image} alt="product image" className="h-64 w-64 object-fill self-center" />
      <h4 className="my-3 line-clamp-2">{title}</h4>

      <div className="flex">{renderStarIcons()}</div>
      
      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} />
      </div>

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}
