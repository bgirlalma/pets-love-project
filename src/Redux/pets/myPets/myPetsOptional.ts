
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref } from "firebase/database";
import { auth, database, firestore } from "../../../firebase/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { PetDefaultAvatar } from "../../../Image/add-pet/pet-default-avatar";
import { get } from "firebase/database";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

interface Pet {
  petId: string;
  uid: string;
  name: string;
  title: string;
  birthday: string;
  petType: string;
  sex: "male" | "female" | "unknown";
  createdAt: string;
}

interface AddPetPayload {
  values: {
    name: string;
    title: string;
    birthday: string;
    petType: string;
  };
  sex: "male" | "female" | "unknown";
}

interface UpdatePetPayload {
  petId: string;
  values: {
    name: string;
    title: string;
    birthday: string;
    petType: string;
    sex: Pet["sex"];
  };
}

interface PetState {
  pets: Pet[];
  loading: boolean;
  error: string | null;
}

function getCurrentUser(): Promise<FirebaseUser | null> {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // отписываемся сразу после первого вызова
      resolve(user); // возвращаем пользователя или null, если нет
    });
  });
}


// get collection my pets
export const fetchPets = createAsyncThunk<Pet[]>(
  "pets/fetchPets",
  async (_, thunkAPI) => {
    try {
      const user = await getCurrentUser();

      if (!user) {
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      const ref = collection(firestore, `users/${user.uid}/mypets`);
      const snapshot = await getDocs(ref);

      const pets: Pet[] = snapshot.docs.map((doc) => ({
        petId: doc.id, 
        uid: user.uid, 
        ...(doc.data() as Omit<Pet, "petId" | "uid">),
      }));

      return pets;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch pets");
    }
  }
);

// add new my pet
export const AddPet = createAsyncThunk<Pet, AddPetPayload & { uid: string }>(
  "pets/AddPet",
  async ({ values, sex, uid }, thunkAPI) => {
    try {
      if (!uid) {
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      const imgURL = PetDefaultAvatar;
      const petId = crypto.randomUUID();

      const newPet: Pet = {
        petId,
        uid,
        name: values.name,
        title: values.title,
        birthday: values.birthday,
        petType: values.petType,
        sex,
        createdAt: new Date().toISOString(),
      };

      // добавляем в подколлекцию пользователя
      const userPetsRef = doc(firestore, `users/${uid}/mypets/${petId}`);
      await setDoc(userPetsRef, newPet);
      return newPet;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// update profile my pet

export const updateProfileMyPets = createAsyncThunk<
  Pet,
  UpdatePetPayload & { petId: string, uid: string }
>("pets/updateProfileMyPets", async ({ uid, petId, values }, thunkAPI) => {
  try {
    // check user auth
    if (!uid) {
      return thunkAPI.rejectWithValue("User not authenticated");
    }

    // update IMG
    let imgURL = PetDefaultAvatar;

    const petRef = doc(firestore, `users/${uid}/mypets/${petId}`);

    const updatedData: Partial<Pet> = {
      name: values.name,
      title: values.title,
      birthday: values.birthday,
      petType: values.petType,
      sex: values.sex,
    };

    await updateDoc(petRef, updatedData);

    return {
      petId,
      uid,
      ...updatedData,
    } as Pet;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// delete pet profile
export const deletedPet = createAsyncThunk<
  string,
  { petId: string; uid: string }
>("pets/deletedPet", async ({ petId, uid }, thunkAPI) => {
  try {
    if (!uid) {
      return thunkAPI.rejectWithValue("User not authenticated");
    }

    const petRef = doc(firestore, `users/${uid}/mypets/${petId}`);
    await deleteDoc(petRef);

    return petId;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const ListTypePets = createAsyncThunk(
  "pets/ListTypePets",
  async (_, thunkAPI) => {
    try {
     
      const snapshot = await get(ref(database, "typepets")); // <-- Убедись, что путь верный
      const data = snapshot.val();
      if (!data) {
       
        return thunkAPI.rejectWithValue("No data found");
      }
      return data;

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
