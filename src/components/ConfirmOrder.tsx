"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { User } from "../../typings";
import { useRouter } from "next/navigation";

interface ConfirmOrderButtonProps {
    userDetails: User;
    cartItems: {
        title: string;
        price: number;
        quantity: number;
    }[];
    totalPrice: number;
    validateFields: () => boolean;
}

export default function ConfirmOrderButton({ userDetails, cartItems, totalPrice, validateFields }: ConfirmOrderButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();  

  const handleOrderSubmit = async () => {
    if (!validateFields()) {
      return; // Stop submission if fields are invalid
    }
    setLoading(true);  

    const orderData = {
      userDetails,
      cartItems,
      totalPrice,
    };

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log('Order submitted successfully');
        setIsDialogOpen(true);  
      } else {
        console.error('Order submission failed:', await response.json());
      }
    } catch (error) {
      console.error('Order submission error:', error);
    } finally {
      setLoading(false);  
    }
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    router.push('/product');  
  };

  return (
    <div>
      <button
        className="mt-6 px-6 py-2 border border-[#f8dbba] text-[#613502] text-lg font-semibold rounded hover:bg-[#613502] hover:text-white"
        onClick={handleOrderSubmit}  
        disabled={loading}  
      >
        {loading ? 'Processing...' : 'CONFIRM ORDER'}  
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Confirmed</DialogTitle>
            <DialogDescription>
              Your order has been placed successfully! <br />
              Total: ${totalPrice.toFixed(2)}.
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <button onClick={handleClose} className="mt-4 px-4 py-2 bg-[#613502] text-white rounded">
              Close
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}