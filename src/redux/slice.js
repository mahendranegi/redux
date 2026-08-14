import { createSlice } from "@reduxjs/toolkit";

// Slice contains features like:
// addToCart, increment, decrement, etc.

const initialState = {
  value: 0,
};

export const AddToCart = createSlice({
  name: "cart",

  initialState,

  reducers: {
    IncrementItems: (state) => {
      state.value += 1;
    },
    DecrementItems: (state) => {
      state.value -= 1;
    },
  },
});

export const { IncrementItems,DecrementItems } = AddToCart.actions;

export default AddToCart.reducer;