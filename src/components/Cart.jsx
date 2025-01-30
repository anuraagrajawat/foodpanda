import { useState } from "react";

const Cart = () => {
    // Sample cart items
    const [cartItems] = useState([
        {
            id: 1,
            name: "Pizza Margherita",
            price: 8.99,
            quantity: 2,
            image: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            name: "Classic Burger",
            price: 6.49,
            quantity: 1,
            image: "https://via.placeholder.com/100",
        },
        {
            id: 3,
            name: "Pasta Alfredo",
            price: 10.99,
            quantity: 1,
            image: "https://via.placeholder.com/100",
        },
    ]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-100 via-white to-orange-50 py-10">
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8">
                <h1 className="text-3xl font-bold text-orange-600 mb-6">Your Cart</h1>
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="col-span-2 space-y-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center bg-orange-100 p-4 rounded-lg shadow-sm"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-lg"
                                    />
                                    <div className="ml-4 flex-1">
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {item.name}
                                        </h2>
                                        <p className="text-gray-600">
                                            ${item.price.toFixed(2)} x {item.quantity}
                                        </p>
                                    </div>
                                    <p className="text-lg font-bold text-gray-800">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Summary */}
                        <div className="bg-orange-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
                            <div className="flex justify-between text-lg text-gray-700 mb-2">
                                <span>Subtotal</span>
                                <span>${calculateTotal()}</span>
                            </div>
                            <div className="flex justify-between text-lg text-gray-700 mb-2">
                                <span>Tax (10%)</span>
                                <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-gray-800">
                                <span>Total</span>
                                <span>${(calculateTotal() * 1.1).toFixed(2)}</span>
                            </div>
                            <button className="w-full mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition">
                                Checkout
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-600 text-lg">Your cart is empty!</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
