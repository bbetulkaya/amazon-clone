import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";
export default function CheckoutProduct({
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
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    // push item to redux
    dispatch(addToBasket(product));
  };
  
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({id}));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} alt="" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">{renderStarIcons()}</div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div>${price}</div>
      </div>
      {/* Right add/remove button */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}
