import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../firebase/firebase";
import { getDoc } from "firebase/firestore";

export const UpdateUserData = createAsyncThunk(
  "pets-userAuth/UpdateUserData",
  async (uid, thunkApi) => {
    try {
      const userDocRef = await getDoc(database, "users", uid);

      if (userDocRef.exists()) {
        console.log("User data:", userDocRef.data());
      } else {
        console.log("No such user!");
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
