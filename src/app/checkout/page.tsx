"use client"

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ConfirmOrderButton from '@/components/ConfirmOrder';

export default function Checkout() {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const [userDetails, setUserDetails] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        paymentMethod: 'Cash On Delivery',
    });

    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }, [cartItems]);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUserDetails({
          ...userDetails,
          [e.target.name]: e.target.value,
        });
    };

    const validateFields = () => {
      const newErrors: string[] = [];

      Object.keys(userDetails).forEach((key) => {
          if (!userDetails[key as keyof typeof userDetails]) {
              newErrors.push(key);
          }
      });

      setErrors(newErrors);
      return newErrors.length === 0; // Return true if no errors
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-10">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-6">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer information</h2>
            {errors.includes('email') && <p className="text-red-500 text-sm">Email is required.</p>}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full mb-6 p-3 border border-gray-300 rounded-md"
            />
            

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Billing details</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                {errors.includes('firstName') && <p className="text-red-500 text-sm">First name is required.</p>}
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
              </div>

              <div className="flex flex-col">
                {errors.includes('lastName') && <p className="text-red-500 text-sm">Last name is required.</p>}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={userDetails.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              
            </div>

            {errors.includes('address') && <p className="text-red-500 text-sm">Address is required.</p>}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={userDetails.address}
              onChange={handleInputChange}
              className="w-full mb-4 p-3 border border-gray-300 rounded-md"
            />
            

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col">
                {errors.includes('city') && <p className="text-red-500 text-sm">City is required.</p>}
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={userDetails.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
              </div>
              
              <div className="flex flex-col">
                {errors.includes('state') && <p className="text-red-500 text-sm">State is required.</p>}
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={userDetails.state}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                {errors.includes('zipCode') && <p className="text-red-500 text-sm">Z-code is required.</p>}
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={userDetails.zipCode}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              
            </div>

            {errors.includes('phone') && <p className="text-red-500 text-sm">Phone is required.</p>}
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full mb-6 p-3 border border-gray-300 rounded-md"
            />
            

            <select
              name="paymentMethod"
              className="w-full mb-4 p-3 border border-gray-300 rounded-md"
              value={userDetails.paymentMethod}
              onChange={handleInputChange}>
              <option>Cash On Delivery</option>
            </select>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your order</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-300">
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Product</p>
                <p className="text-gray-600">Subtotal</p>
              </div>

              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-4">
                    <p className="text-gray-800">{item.title} × {item.quantity}</p>
                    <p className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
                <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                    <p className="text-gray-800 font-bold">Total</p>
                    <p className="text-gray-800 font-bold">${totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <ConfirmOrderButton
             userDetails={userDetails} 
             cartItems={cartItems} 
             totalPrice={totalPrice}
             validateFields={validateFields}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
