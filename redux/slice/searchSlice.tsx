import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface SearchState {
  search: string;
  startupPokemon: Product[];
}

const initialState: SearchState = {
  search: "",
  startupPokemon: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupProduct: (state, action: PayloadAction<Product[]>) => {
      state.startupPokemon = action.payload;
    },
  },
});

export const { setSearch, setStartupProduct } = searchSlice.actions;
export default searchSlice.reducer;
