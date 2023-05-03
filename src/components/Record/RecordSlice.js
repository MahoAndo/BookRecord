import { createSlice } from "@reduxjs/toolkit";

const recordSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.title !== action.payload);
    }
  }
});

export const { addItem, removeItem } = recordSlice.actions;
export default recordSlice.reducer;
