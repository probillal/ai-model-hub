import React from "react";
import Cart from "../Cart/Cart";

const Carts = ({ carts }) => {
  return (
    <div className="max-w-96 lg:container mx-auto mb-10">
      {carts.map((cart) => (
        <Cart cart={cart}></Cart>
      ))}
    </div>
  );
};

export default Carts;
