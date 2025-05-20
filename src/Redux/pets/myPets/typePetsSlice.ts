import { createSlice } from "@reduxjs/toolkit";
import { ListTypePets } from "./myPetsOptional";

const initialState = {
    data: [
  ],
  loading: false,
  error: null,
};

const TypePetsSlice = createSlice({
  name: "typePets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ListTypePets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ListTypePets.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(ListTypePets.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default TypePetsSlice.reducer;
