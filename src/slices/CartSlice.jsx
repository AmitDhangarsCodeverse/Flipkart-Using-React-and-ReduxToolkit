import { createSlice } from "@reduxjs/toolkit";
export const CartSlice=createSlice({
  name:"cart",
  initialState:[],
  reducers:{
        addProduct(state,action){
         state.push(action.payload);
        },
        removeProduct(state,action){
        state.splice(action.payload,1);
        },
        clearProduct(){
          return [];
        }
  },
});
export const { addProduct, removeProduct, clearProduct } = CartSlice.actions;