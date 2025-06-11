import { createSlice } from "@reduxjs/toolkit";
import Loading from "../components/loader";
export const ProductSlice=createSlice({
     name:"Products",
     initialState:{
      items:[],
      Loading:true,
      err:[]
     },
     reducers:{},
     extraReducers:(bulider)
})