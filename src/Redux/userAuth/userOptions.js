import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // signOut,
  // updateEmail,
  // updatePassword,
  // updatePhoneNumber,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
// import { ref, set } from "firebase/database";

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

      // Обновляем профиль пользователя
      await updateProfile(user, {
        displayName: newuser.name,
        photoURL: defaultAvatar,
      }).catch((err) => console.error("Ошибка обновления профиля:", err));

      // Запрашиваем токен пользователя
      const token = await auth.currentUser.getIdToken();

    return {
      uid: user.uid,
      displayName: user.displayName || newuser.name,
      email: user.email,
      photoURL: user.photoURL || defaultAvatar,
      token,
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

// export const updateUserProfile = createAsyncThunk(
//   "pets-userAuth/updateUserProfile",
//   async (updatedData, thunkApi) => {
//     try {
//       if (!auth.currentUser) {
//         throw new Error("Пользователь не найден");
//       }

//       // Обновляем имя и фото профиля (если фото не передано, оставляем дефолтный)
//       const newPhotoURL =
//         updatedData.photoURL || "/Image/userimg/default-avatar.jpg"; // Ссылка на дефолтный аватар

//       await updateProfile(auth.currentUser, {
//         displayName: updatedData.name,
//         photoURL: newPhotoURL,
//       });

//       // Обновляем email, если передан
//       if (updatedData.email) {
//         await updateEmail(auth.currentUser, updatedData.email);
//       }

//       // Обновляем пароль, если передан
//       if (updatedData.password) {
//         await updatePassword(auth.currentUser, updatedData.password);
//       }

//       // обновляем номер телефона если передан
//       if (updatedData.number) {
//         await updatePhoneNumber(auth.currentUser, updatedData.number);
//       }

//       const { uid, displayName, email } = auth.currentUser;
//       const newUserData = {
//         uid,
//         displayName,
//         email,
//         avatar: newPhotoURL,
//       };

//       console.log("Updated user data:", newUserData);

//       // Сохраняем ссылку на аватар в Firebase Realtime Database
//       const userRef = ref(database, "user/" + auth.currentUser.uid);
//       await set(userRef, {
//         name: updatedData.name,
//         email: updatedData.email,
//         avatar: newPhotoURL, // Сохраняем URL нового аватара
//       });

//       return newUserData;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
