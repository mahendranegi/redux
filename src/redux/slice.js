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
        if (state.value > 0) {
    state.value -= 1;
  }
    },
     ClearAllItems: (state) => {
        state.value = 0;
    },
  },
});

export const { IncrementItems,DecrementItems,ClearAllItems } = AddToCart.actions;

export default AddToCart.reducer;