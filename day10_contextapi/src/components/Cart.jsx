import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {
  let {cartItems}=useContext(MyShop);
  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center shadow">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-4 flex items-center gap-5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-green-600 font-bold mt-2">
                    ₹{item.price}
                  </p>
                </div>

                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-white shadow rounded-lg p-5 mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total Price</h2>

            <h2 className="text-2xl font-bold text-green-600">
              ₹{totalPrice}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;