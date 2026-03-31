import React, { useState } from "react";
import { toast } from "react-toastify";

const AiModelCard = ({ model, carts, setCarts }) => {
  console.log(model);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const handleSubscription = () => {
    setIsSubscribe(true);
    setCarts([...carts, model]);
    toast.success("Item added Successfully!");
  };
  return (
    <div className="card bg-base-100 w-96 shadow-2xl border border-zinc-500 pt-5">
      <figure className="">
        <img
          className="w-40 h-40 object-contain transition-transform duration-300 hover:scale-90"
          src={model.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
        <h4>
          <span className="text-2xl font-semibold">$ {model.price}</span> /month
        </h4>
        <div className="card-actions mt-5">
          <button
            onClick={handleSubscription}
            className="btn bg-red-600 hover:bg-red-500 w-full rounded-xl"
          >
            {isSubscribe ? "Subscribe" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiModelCard;
