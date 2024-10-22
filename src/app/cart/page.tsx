"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { FiTrash } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateQuantity, removeFromCart } from '@/redux/cartSlice/cartSlice';
import Link from 'next/link';

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container max-w-7xl mx-auto py-12 px-4 mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="flex flex-col gap-6">
                    <div className="overflow-x-auto lg:overflow-visible">
                        <table className="min-w-full bg-white border border-gray-200 shadow-lg hidden lg:table">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="text-left p-4 text-gray-600"></th>
                                    <th className="text-left p-4 text-gray-600">Product</th>
                                    <th className="text-left p-4 text-gray-600">Price</th>
                                    <th className="text-left p-4 text-gray-600">Quantity</th>
                                    <th className="text-left p-4 text-gray-600">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-4">
                                            {/* Trash Icon */}
                                            <button
                                                className="text-gray-600 hover:text-red-600"
                                                onClick={() => dispatch(removeFromCart({ title: item.title }))}
                                            >
                                                <FiTrash size={20} />
                                            </button>
                                        </td>
                                        <td className="p-4 flex items-center">
                                            {/* Product Image */}
                                            <div className="relative w-20 h-20">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    layout="fill"
                                                    className="object-cover rounded"
                                                />
                                            </div>
                                            <span className="ml-4 text-gray-700">{item.title}</span>
                                        </td>
                                        <td className="p-4 text-gray-700">${item.price.toFixed(2)}</td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <button
                                                    className="text-2xl font-bold px-3 py-1 border border-gray-300 text-gray-700"
                                                    onClick={() => {
                                                        if (item.quantity > 1) {
                                                            dispatch(updateQuantity({ title: item.title, quantity: item.quantity - 1 }));
                                                        }
                                                    }}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="w-12 text-center text-xl font-medium border-gray-300 mx-2 text-gray-700"
                                                    value={item.quantity}
                                                    readOnly
                                                />
                                                <button
                                                    className="text-2xl font-bold px-3 py-1 border border-gray-300 text-gray-700"
                                                    onClick={() => dispatch(updateQuantity({ title: item.title, quantity: item.quantity + 1 }))}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-700">${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Mobile View */}
                        <div className="lg:hidden">
                            {cartItems.map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 shadow-lg rounded-md p-4 mb-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="relative w-16 h-16 mr-4">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    layout="fill"
                                                    className="object-cover rounded"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-gray-700 font-semibold">{item.title}</h3>
                                                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <button
                                            className="text-gray-600 hover:text-red-600"
                                            onClick={() => dispatch(removeFromCart({ title: item.title }))}
                                        >
                                            <FiTrash size={20} />
                                        </button>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <button
                                            className="text-2xl font-bold px-2 py-1 border border-gray-300 text-gray-700"
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    dispatch(updateQuantity({ title: item.title, quantity: item.quantity - 1 }));
                                                }
                                            }}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="w-12 text-center text-xl font-medium border-gray-300 mx-2 text-gray-700"
                                            value={item.quantity}
                                            readOnly
                                        />
                                        <button
                                            className="text-2xl font-bold px-2 py-1 border border-gray-300 text-gray-700"
                                            onClick={() => dispatch(updateQuantity({ title: item.title, quantity: item.quantity + 1 }))}
                                        >
                                            +
                                        </button>
                                        <span className="ml-4 text-gray-700 font-semibold">
                                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 bg-gray-50 border border-gray-200 shadow-lg p-6 h-fit">
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Cart totals</h2>
                        {/* <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-gray-600">${totalPrice.toFixed(2)}</span>
                        </div> */}
                        <div className="flex justify-between mb-6">
                            <span className="text-gray-600">Total</span>
                            <span className="text-xl font-bold text-gray-700">${totalPrice.toFixed(2)}</span>
                        </div>
                        <Link href="/checkout" passHref>
                            <button
                                className="w-full mt-6 px-6 py-2 border border-[#f8dbba] text-[#613502] text-lg font-semibold rounded hover:bg-[#613502] hover:text-white"
                            >
                                PROCEED TO CHECKOUT
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
