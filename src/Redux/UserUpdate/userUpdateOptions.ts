import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// Интерфейс для передачи данных
interface UpdateUserPayload {
  uid: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

// Создание async thunk для обновления данных в Firestore
export const updateUserDataInFirestore = createAsyncThunk(
  "user/updateUserData",
  async ({ uid, name, email, phone, avatar }: UpdateUserPayload, thunkAPI) => {
    try {
      const userRef = doc(firestore, "users", uid); // Доступ к документу пользователя в коллекции users
      // Проверяем, существует ли документ с таким uid
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        throw new Error(`User document with UID ${uid} not found.`);
      }

      // Если документ существует, обновляем его
      await updateDoc(userRef, {
        name,
        email,
        phone,
        avatar,
      }); // Обновляем поля напрямую

      return { name, email, phone, avatar };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Возвращаем ошибку, если что-то пошло не так
    }
  }
);
