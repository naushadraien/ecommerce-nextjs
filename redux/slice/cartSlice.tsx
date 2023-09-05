import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItems {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
  totalPrice?: number;
}

// Define the CartState type
interface CartState {
  cartItems: CartItems[];
  totalQuantity: number;
  totalPriceofProduct: number;
}

// Define the initial state
const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPriceofProduct: 0,
};

// Create a cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItems>) => {
      // state.cartItems.push(action.payload); //this was previous code for adding items to cart

      const newItem = action.payload; //extracts the newItem from the action's payload.
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id //checks if the newItem is already in the cartItems array. If an item with the same id exists, it is stored in existingItem.
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          // id: newItem.id,
          // title: newItem.title,
          // price: newItem.price,
          // description: newItem.description,
          // category: newItem.category,
          // image: newItem.image,
          // rating: newItem.rating,

          // or

          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++; //if the item already exists, the quantity is increased by 1.
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price); //the total price is increased by the price of the item.
      }
      state.totalPriceofProduct = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeAProductFromCart: (state, action: PayloadAction<number>) => {
      // state.cartItems = state.cartItems.filter(  //this was previous code for removing items from cart
      //   (item) => item.id !== action.payload//filters the cartItems array and returns all items that do not have the same id as the one passed in the action's payload.
      // );

      const id = action.payload; //extracts the id from the action's payload.
      const existingItem = state.cartItems.find((item) => item.id === id); //checks if the item is already in the cartItems array. If an item with the same id exists, it is stored in existingItem.
      state.totalQuantity--; //decreases the totalQuantity by 1.
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--; //if the item already exists, the quantity is decreased by 1.
          existingItem.totalPrice =
            Number(existingItem.totalPrice) - Number(existingItem.price); //the total price is decreased by the price of the item.
        } else {
          // If quantity is 1 or less, simply skip removing the item
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== id //filters the cartItems array and returns all items that do not have the same id as the one passed in the action's payload.
          );
        }
      }
      state.totalPriceofProduct = state.cartItems.reduce(
        //below 0 is the initial value of total
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0 //calculates the total price of all items in the cartItems array.
      );
    },
    deleteProductsFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload; //extracts the id from the action's payload.
      const existingItem = state.cartItems.find((item) => item.id === id); //checks if the item is already in the cartItems array. If an item with the same id exists, it is stored in existingItem.
      state.totalQuantity--; //decreases the totalQuantity by 1.

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== id //filters the cartItems array and returns all items that do not have the same id as the one passed in the action's payload.
        );
      }
      state.totalPriceofProduct = state.cartItems.reduce(
        //below 0 is the initial value of total
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0 //calculates the total price of all items in the cartItems array.
      );
    },
  },
});

// Export the reducer and actions
export const { addToCart, removeAProductFromCart, deleteProductsFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
