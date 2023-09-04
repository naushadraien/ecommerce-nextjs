import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Product type
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

// Define the CartState type
interface CartState {
  cartItems: Product[];
}

// Define the initial state
const initialState: CartState = {
  cartItems: [],
};

// Create a cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Export the reducer and actions
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
