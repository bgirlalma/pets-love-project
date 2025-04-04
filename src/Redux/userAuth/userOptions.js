import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const registerUser = createAsyncThunk(
  "pets-userAuth/registerUser",
  async (newuser, thunkApi) => {
    try {
      const defaultAvatar = "/Image/userimg/default-avatar.jpg";

      // створюємо користувача
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newuser.email,
        newuser.password
      );

      const user = userCredential.user;

    return {
      uid: user.uid,
      name: user.displayName || newuser.name,
      email: user.email,
      photoURL: user.photoURL || defaultAvatar,
    };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "pets-userAuth/loginUser",
  async (user, thunkApi) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const { uid, displayName, email } = userCredential.user;
      
      // 🔹 Сохранение в localStorage
      const userData = { uid, displayName, email, isLogIn: true };
      localStorage.setItem("userAuth", JSON.stringify(userData));

      return userData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "pets-userAuth/logoutUser",
  async (_, thunkApi) => {
    try {
      await signOut(auth);
      return null;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


