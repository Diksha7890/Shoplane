import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./ProductSlice";
const { ProductSlice, FavouriteSlice } = rootReducer;
const store = configureStore({
  reducer: {
    cart: ProductSlice,
    Favourite: FavouriteSlice,
  },
});
export default store;
