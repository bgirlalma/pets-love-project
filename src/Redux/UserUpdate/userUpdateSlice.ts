import { createSlice } from "@reduxjs/toolkit";
import { updateUserDataInFirestore } from "./userUpdateOptions";

interface User {
  uid: string;
  displayName: string;
  email: string;
  phone: string;
  avatar: string;
}

interface UserState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null; // Ошибка может быть строкой
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserDataInFirestore.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserDataInFirestore.fulfilled, (state, action) => {
        console.log("Action Payload:", action.payload); // Для отладки
        state.status = "succeeded";
        if (state.user) {
          // Обновляем пользователя в состоянии Redux, если state.user существует
          state.user = { ...state.user, ...action.payload };
        }
      })
      .addCase(updateUserDataInFirestore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;