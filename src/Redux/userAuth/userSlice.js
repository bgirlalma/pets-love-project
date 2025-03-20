import { createSlice } from "@reduxjs/toolkit"
import { loginUser, logoutUser, registerUser } from "./userOptions"
// import { updateCurrentUser } from "firebase/auth";


const loadUserFromLocalStorage = () => {
  const savedUser = localStorage.getItem("userAuth");
  return savedUser ? JSON.parse(savedUser) : null;
};

const initialState = {
  user: loadUserFromLocalStorage() || { uid: null, name: null, email: null },
  token: null,
  isLogIn: loadUserFromLocalStorage()?.isLogIn || false,
  isLoader: false,
  error: null,
};


const userSlice = createSlice({
  name: "userAuth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 📌 Регистрация пользователя
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoader = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("Register success:", action.payload);
        state.isLoader = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLogIn = true;
        console.log("Register", action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload || "Ошибка регистрации";
      })
      // 📌 Логин пользователя
      .addCase(loginUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoader = false;
        state.isLogIn = true;
        state.user = action.payload;
        console.log("Login", action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload || "Ошибка при входе";
      })
      // 📌 Выход пользователя
      .addCase(logoutUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoader = false;
        state.user = { uid: null, name: null, email: null, photoURL: null };
        state.isLogIn = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload || "Ошибка при выходе";
      });
    // 📌 Обновление профиля
    // .addCase(updateCurrentUser.fulfilled, (state, action) => {

    // }).addCase(updateCurrentUser.rejected, (state, action) => {
    //   state.isLoader = false;
    //   console.error("Error updating profile", action.payload); // Логирование ошибки
    //   state.error = action.payload || "Ошибка при обновлении профиля";
    // })
  },
});

export default userSlice.reducer;