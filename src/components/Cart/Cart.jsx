import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ cart }) => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center gap-4 border p-5 rounded-3xl mt-8">
        <div className="flex items-center gap-3">
          <img
            className="w-[100px] rounded-lg"
            src={cart.image}
            alt={cart.title}
          />
          <div>
            <h2 className="text-xl font-semibold flex gap-2 items-center">
              {cart.title}
            </h2>
          </div>
        </div>
        <div>
          <p>$ {cart.price} /month</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
