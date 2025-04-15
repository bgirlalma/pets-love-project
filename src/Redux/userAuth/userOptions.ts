import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { firestore } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Notify } from "notiflix";

interface RegisterUserPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginUserPayload {
    email: string;
    password: string;
}

interface UserAuthData {
  uid: string;
  name: string;
  email: string;
  isLogIn: boolean;
}

interface UpdateUserPayload {
  uid: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

// Регистрируем нового пользователя
export const registerUser = createAsyncThunk<
  UserAuthData, // Тип данных, которые мы возвращаем
  RegisterUserPayload, // Тип данных, которые передаем в действие
  { rejectValue: string } // Тип для ошибки
>("pets-userAuth/registerUser", async (newuser, thunkApi) => {
  try {
    const defaultAvatar = "/Image/userimg/default-avatar.jpg";

    // Создаем пользователя
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      newuser.email,
      newuser.password
    );

    const user = userCredential.user;

    return {
      uid: user.uid,
      name: user.displayName || newuser.name,
      email: user.email || "",
      isLogIn: true,
    };
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// Логиним пользователя
export const loginUser = createAsyncThunk<
  UserAuthData, // Тип данных, которые мы возвращаем
  LoginUserPayload, // Тип данных, которые передаем в действие
  { rejectValue: string } // Тип для ошибки
>("pets-userAuth/loginUser", async (user, thunkApi) => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const { uid, displayName, email } = userCredential.user;

    // Сохраняем в localStorage
    const userData: UserAuthData = {
      uid,
      name: displayName || "",
      email,
      isLogIn: true,
    };
    localStorage.setItem("userAuth", JSON.stringify(userData));

    // Получаем дополнительные данные из Firestore, включая телефон
    const userRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      const firestoreData = docSnap.data();
      return {
        uid,
        name: firestoreData.name,
        email: firestoreData.email,
        phone: firestoreData.phone,
        avatar: firestoreData.avatar,
      };
    }

    return userData;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

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

// Создание async thunk для обновления данных в Firestore
export const updateUserDataInFirestore = createAsyncThunk<
  UpdateUserPayload, // Тип данных, которые мы возвращаем
  UpdateUserPayload, // Тип данных, которые передаем в действие
  { rejectValue: string } // Тип для ошибки
>(
  "user/updateUserData",
  async ({ uid, name, email, phone, avatar }, thunkAPI) => {
    try {
      // 1. Обновляем данные в Firestore
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

      // 2. Обновляем профиль пользователя в Firebase Authentication
      const user = auth.currentUser;

      if (user) {
        // 1. Если email новый, но текущий еще не подтверждён
        if (email && email !== user.email) {
          if (!user.emailVerified) {
            await sendEmailVerification(user, {
              url: "https://pets-love-c6929.firebaseapp.com",
            });
            Notify.info(
              "Мы отправили письмо для подтверждения email. Подтверди его прежде чем менять."
            );
            return thunkAPI.rejectWithValue("Email не подтверждён");
          } else {
            await updateEmail(user, email);
          }
        }

        // 2. Обновляем имя и аватар
        await updateProfile(user, {
          displayName: name,
          photoURL: avatar || user.photoURL,
        });
      }

      // 3. Сохраняем обновленные данные в localStorage
      const updatedUserData = { uid, name, email, isLogIn: true };
      localStorage.setItem("userAuth", JSON.stringify(updatedUserData));

      return { uid, name, email, phone, avatar };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Возвращаем ошибку, если что-то пошло не так
    }
  }
);
