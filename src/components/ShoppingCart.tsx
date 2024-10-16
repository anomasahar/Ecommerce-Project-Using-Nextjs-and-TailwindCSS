import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart, FiTrash } from 'react-icons/fi';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@/redux/store";
import { updateQuantity, removeFromCart } from "@/redux/cartSlice/cartSlice"; 

export function CartSheet() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open Cart">
          <FiShoppingCart className="text-white" size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 py-4">
          {cartItems.map((item) => (
            <div key={item.title} className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={item.image} alt={item.title} width={64} height={64} className="rounded" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => dispatch(updateQuantity({ title: item.title, quantity: item.quantity - 1 }))}
                      disabled={item.quantity <= 1}>
                      -
                    </button>
                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ title: item.title, quantity: item.quantity + 1 }))}>
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="text-red-500 mt-2"
                  onClick={() => dispatch(removeFromCart({ title: item.title }))}>
                  <FiTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-6">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
          </div>
          <SheetClose asChild>
            <Link href="/cart" passHref>
              <button
                className="w-full mt-6 px-6 py-2 border border-[#f8dbba] text-[#613502] text-lg font-semibold rounded hover:bg-[#613502] hover:text-white">
                VIEW CART
              </button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/checkout" passHref>
              <button
                className="w-full mt-6 px-6 py-2 border border-[#f8dbba] text-[#613502] text-lg font-semibold rounded hover:bg-[#613502] hover:text-white">
                CHECKOUT
              </button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
