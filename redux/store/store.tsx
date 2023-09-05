import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/slice/cartSlice";
import searchReducer from "@/redux/slice/searchSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  search: searchReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer); // here root reducer is passed as an argument to persistReducer

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: { for using persistReducer we need to use rootReducer instead of two or more reducers to combine all the reducers into one as above
  //   cart: cartReducer,
  //   search: searchReducer,
  // },
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
