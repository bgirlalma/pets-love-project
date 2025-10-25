import { createAsyncThunk } from "@reduxjs/toolkit";
import { Report } from "notiflix/build/notiflix-report-aio";
import { auth, firestore } from "../../../../firebase/firebase";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { Notify } from "notiflix";

export interface TypeOfPets {
  uid?: string;
  title?: string;
  name?: string;
  rating?: number;
  birthday?: string;
  sex?: string;
  species?: string;
  category?: string;
  desc?: string;
  price?: number;
  image?: string;
  city?: string;
}

// додаємо картки з тваринами в Улюблене

// ✅ додаємо картку в улюблене
export const AddToFavorite = createAsyncThunk<
  TypeOfPets, // повертаємо сам об'єкт питомця
  { pet: TypeOfPets },
  { rejectValue: string }
>("favoritePets/AddToFavorite", async ({ pet }, thunkAPI) => {
  const user = auth.currentUser;

  if (!user) {
    Report.failure(
      "Увага!",
      "Будь ласка, увійдіть, щоб додати тваринку в улюблене ❤️",
      "Okay"
    );
    return thunkAPI.rejectWithValue("User not logged in");
  }

  if (!pet.uid) {
    Report.failure(
      "Помилка!",
      "Цю картку не вдалося додати. Спробуйте пізніше або зв'яжіться з власником 🐾",
      "Okay"
    );
    return thunkAPI.rejectWithValue("Pet UID is missing");
  }

  try {
    const favRef = doc(firestore, "users", user.uid, "favoritePets", pet.uid);

    // Видаляємо undefined/null поля
    const petToSave = Object.fromEntries(
      Object.entries(pet).filter(([_, v]) => v !== undefined && v !== null)
    ) as TypeOfPets;

    await setDoc(favRef, petToSave);

    Notify.success("Тваринку додано в улюблене ❤️");

    return petToSave; // повертаємо об'єкт для store
  } catch (error: any) {
    Notify.failure(error.message || "Не вдалося додати в улюблене");
    return thunkAPI.rejectWithValue(error.message || "Failed to add pet");
  }
});

// ✅ Отримуємо колекцію Улюбленого
export const FetchFavoritePets = createAsyncThunk<
  TypeOfPets[],
  void,
  { rejectValue: string }
>("favoritePets/FetchFavoritePets", async (uid, thunkAPI) => {
  const user = auth.currentUser;

  if (!user) {
    return thunkAPI.rejectWithValue("User not logged in");
  }

  try {
 const favRef = collection(firestore, `users/${user.uid}/favoritePets`);
 const snapshot = await getDocs(favRef);
 return snapshot.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch pets");
  }
});

// ✅ Видаляємо картки з Улюбленого
export const DeleteFavoritePet = createAsyncThunk<
  string, // повертаємо uid видаленого питомця
  { pet: TypeOfPets },
  { rejectValue: string }
>("favoritePets/DeleteFavoritePet", async ({ pet }, thunkAPI) => {
  const user = auth.currentUser;

  if (!user) {
    Report.failure(
      "Увага!",
      "Будь ласка, увійдіть, щоб видалити тварину з ❤️",
      "Okay"
    );
    return thunkAPI.rejectWithValue("User not logged in");
  }

  if (!pet?.uid) {
    Report.failure("Помилка!", "Не вдалося ідентифікувати тварину", "Okay");
    return thunkAPI.rejectWithValue("Pet UID is missing");
  }

  try {
    const favRef = doc(firestore, "users", user.uid, "favoritePets", pet.uid);
    await deleteDoc(favRef);

    Notify.success("Тваринку було успішно видалено з улюбленого");

    return pet.uid; // повертаємо uid для видалення зі store
  } catch (error: any) {
    Notify.failure(error.message || "Не вдалося видалити з улюбленого");
    return thunkAPI.rejectWithValue(error.message || "Failed to delete pet");
  }
});

// Redux thunk для обновления рейтинга
export const UpdatePetRating = createAsyncThunk<
  void,
  { petId: string; rating: number }
>("pets/UpdatePetRating", async ({ petId, rating }, thunkAPI) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return thunkAPI.rejectWithValue("User not authenticated");
    }

    const petRef = doc(firestore, `listofdifferentpets`, petId);

   const petSnapshot = await getDoc(petRef);
   if (petSnapshot.exists()) {
     const currentRating = petSnapshot.data().rating || 0;
     const newRating = currentRating + rating;

     await updateDoc(petRef, { rating: newRating });
   }
  } catch (error: any) {
    console.error("Failed to update pet rating:", error);
    return thunkAPI.rejectWithValue(error.message || "Failed to update rating");
  }
});