import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  registerUser,
  updateUserDataInFirestore,
} from "./userOptions";

// Тип пользователя
interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  isLogIn?: boolean;
}

// Тип состояния для userSlice
interface UserState {
  user: User | null;
  token: string | null;
  isLogIn: boolean;
  isLoader: boolean;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

// Функция для загрузки данных пользователя из localStorage
const loadUserFromLocalStorage = (): User | null => {
  const savedUser = localStorage.getItem("userAuth");
  return savedUser ? JSON.parse(savedUser) : null;
};

// Получаем данные из localStorage
const savedUser = loadUserFromLocalStorage();

// Инициализируем начальное состояние
const initialState: UserState = {
  user: savedUser || {
    uid: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
    isLogIn: false,
  },
  token: null,
  isLogIn: savedUser?.isLogIn || false,
  isLoader: false,
  error: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "userAuth",
  initialState: initialState,
  reducers: {
    setUserProfile(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
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
        state.isLogIn = true;
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload;
      })
      // 📌 Выход пользователя
      .addCase(logoutUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoader = false;
        state.user = {
          uid: "",
          name: "",
          email: "",
          phone: "",
          avatar: "",
          isLogIn: false,
        };
        state.isLogIn = false;
        localStorage.removeItem("userAuth");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoader = false;
        state.error = action.payload;
      })
      // 📌 Обновление данных пользователя в Firestore
      .addCase(updateUserDataInFirestore.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserDataInFirestore.fulfilled, (state, action) => {
        console.log("Action Payload:", action.payload); // Для отладки
        state.status = "succeeded";
        state.user = {
          uid: action.payload.uid,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
          avatar: action.payload.avatar,
        };
      })
      .addCase(updateUserDataInFirestore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setUserProfile } = userSlice.actions;
export default userSlice.reducer;
