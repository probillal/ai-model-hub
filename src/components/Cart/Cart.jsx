import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ cart, carts, setCarts }) => {
  const handleDeleteItem = (cart) => {
    console.log("click");
    const filterCart = carts.filter((item) => item.id !== cart.id);
    setCarts(filterCart);
  };
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center gap-4 border p-4 rounded-3xl mt-8">
        <div className="flex items-center gap-3">
          <img
            className="w-[70px] rounded-lg"
            src={cart.image}
            alt={cart.title}
          />
          <div>
            <h2 className="text-2xl font-bold flex gap-2 items-center">
              {cart.title}
            </h2>
            <p className="font-semibold">$ {cart.price} /month</p>
          </div>
        </div>
        <button
          onClick={() => handleDeleteItem(cart)}
          className="btn text-red-500 text-2xl"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default Cart;
