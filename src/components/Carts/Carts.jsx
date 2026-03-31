import React from "react";
import Cart from "../Cart/Cart";

const Carts = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);
  const handlePayment = () => {
    setCarts([]);
  };
  return (
    <div className="max-w-96 lg:container mx-auto mb-10">
      <h2 className="text-2xl font-bold">Your Cart Items</h2>
      {carts.length === 0 ? (
        <h2 className="text-3xl text-center font-bold my-10 lg:my-20">
          Cart is Empty
        </h2>
      ) : (
        <>
          {carts.map((cart) => (
            <Cart cart={cart}></Cart>
          ))}
          <div className="flex justify-between items-center gap-4 border p-5 rounded-3xl mt-8">
            <div>
              <h2 className="text-2xl font-bold flex gap-2 items-center">
                Total
              </h2>
            </div>

            <h2 className="text-2xl font-bold">$ {totalPrice}</h2>
          </div>
          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-red-600 hover:bg-red-500 text-2xl text-white rounded-2xl py-8"
          >
            Proceed to checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Carts;
