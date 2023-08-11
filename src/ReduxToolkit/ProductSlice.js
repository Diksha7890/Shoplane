import { createSlice } from "@reduxjs/toolkit";
const initialState1 = {
  carts: [],
  subTotal:0,
  quantity:{},
};
const initialState2 = {
  items: [],
};
const ProductSlice = createSlice({
  name: "cart",
  initialState: initialState1,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const newItem = action.payload;
      state.carts.push(newItem);
      state.quantity[newItem.id]=1;
      state.subTotal+=newItem.price*(state.quantity[newItem.id]);
    },
    REMOVE_FROM_CART: (state, action) => {
      const newItem=action.payload;
      state.carts=state.carts.filter((item)=>item.id !==newItem.id);
      state.subTotal-=newItem.price*(state.quantity[newItem.id]);
      delete state.quantity[newItem.id];
    },
    INCREMENT:(state, action)=>{
     const item=action.payload;
     state.quantity[item.id]++;
     state.subTotal+=item.price;
    },
    DECREMENT:(state, action)=>{
    const item=action.payload;
    state.quantity[item.id]--;
    state.subTotal-=item.price;
  }
}});
const FavouriteSlice = createSlice({
  name: "Favourite",
  initialState: initialState2,
  reducers: {
    ADD_TO_FAVOURITE: (state, action) => {
      state.items.push(action.payload);
    },
    REMOVE_FROM_FAVOURITE: (state, action) => {
      const idToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
  },
});
const rootReducer = {
  ProductSlice: ProductSlice.reducer,
  FavouriteSlice: FavouriteSlice.reducer,
};
export const { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT } = ProductSlice.actions;
export const { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } = FavouriteSlice.actions;
export default rootReducer;
