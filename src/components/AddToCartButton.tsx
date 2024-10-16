"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice/cartSlice";  
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Product } from "../../typings"


interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = (product:Product) => {
    dispatch(addToCart(product));
    setIsDialogOpen(true);
  };

  return (
    <div>
      <button
        className="mt-6 sm:mt-4 px-6 py-2 sm:py-2 text-lg sm:text-sm font-semibold rounded border border-[#613502] hover:bg-[#613502] hover:text-white transition duration-300 ease-in-out" 
        onClick={() => handleAddToCart(product)}>
        ADD TO CART
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Product Added</DialogTitle>
          <DialogDescription>
            {product.title} has been added to your cart.
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <button className="mt-4 px-4 py-2 bg-[#613502] text-white rounded">
            Continue Shopping
          </button>
        </DialogClose>
      </DialogContent>
      </Dialog>
    </div>
  );
}                            