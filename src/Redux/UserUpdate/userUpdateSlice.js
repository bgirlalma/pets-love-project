import { createSlice } from "@reduxjs/toolkit";
import { UpdateUserData } from "./userUpdateOptions";

const initialState = {
  user: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const UserUpdateSlice = createSlice({
    name: "pets-userAuth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(UpdateUserData.pending, (state) => {
            state.status = "loading";
          })
          .addCase(UpdateUserData.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.user = { ...state.user, ...action.payload };
          })
          .addCase(UpdateUserData.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
          });
    }
});

export default UserUpdateSlice.reducer