import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Product} from '../../../typings'

interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    cartItems: CartItem[];
    totalQuantity: number;
}

const initialState: CartState = {
    cartItems: [], // Ensure this is an empty array
    totalQuantity: 0,
};

// Function to load the state from localStorage
const loadState = (): CartState => {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) {
        return { cartItems: [], totalQuantity: 0 };
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Could not load state', err);
      return { cartItems: [], totalQuantity: 0 };
    }
};

// Function to save the state to localStorage
const saveState = (state: CartState) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch (err) {
      console.error('Could not save state', err);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action: PayloadAction<Product>) {
        const existingItem = state.cartItems.find(item => item.title === action.payload.title);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
        state.totalQuantity += 1;
      },
      hydrate(state, action: PayloadAction<CartState>) {
        return action.payload;
      },
      updateQuantity(state, action: PayloadAction<{ title: string; quantity: number }>) {
        const item = state.cartItems.find(item => item.title === action.payload.title);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      },
      removeFromCart(state, action: PayloadAction<{ title: string }>) {
        state.cartItems = state.cartItems.filter(item => item.title !== action.payload.title);
      },
    },
});
    

export const {addToCart,hydrate, updateQuantity, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
