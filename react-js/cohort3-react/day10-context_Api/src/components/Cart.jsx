import React, { useContext } from "react";
import { Star } from "lucide-react";
import { MyShop } from "../context/MyWebsite";

// const Cart = ({cartItems}) => {
const Cart = () => {
  let { cartItems } = useContext(MyShop);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart ({cartItems.length})
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center shadow">
            <h2 className="text-2xl font-semibold text-gray-600">
              Your Cart is Empty 🛒
            </h2>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow p-5 flex gap-5"
                >
                  {/* Product Image */}
                  <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full capitalize mb-2">
                        {item.category}
                      </span>

                      <h2 className="text-xl font-semibold line-clamp-2">
                        {item.title}
                      </h2>

                      <p className="text-gray-500 mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-5">
                      <div className="flex items-center gap-1">
                        <Star
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span>{item.rating.rate}</span>
                        <span className="text-gray-400">
                          ({item.rating.count})
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-green-600">
                        ${item.price}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
