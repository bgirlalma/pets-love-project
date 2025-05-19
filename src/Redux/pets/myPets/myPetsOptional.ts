import React from "react";
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { auth, database, firestore } from "../../../firebase/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

interface Pet {
  uid: string;
  name: string;
  title: string;
  birthday: string;
  petType: string;
  sex: "male" | "female" | "unknown";
  image: string;
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
  file: File | null;
}

interface UpdatePetPayload {
  uid: string;
  values: {
    name: string;
    title: string;
    birthday: string;
    petType: string;
    sex: Pet["sex"];
    file?: File | null;
  };
}

interface PetState {
  pets: Pet[];
  loading: boolean;
  error: string | null;
}

const initialState: PetState = {
  pets: [],
  loading: false,
  error: null,
};


// get collection my pets
export const fetchPets = createAsyncThunk<Pet[]>(
  "pets/fetchPets",
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      const snapshot = await getDocs(
        collection(database, `users/${user.uid}/mypets`)
      );
        const pets: Pet[] = [];

      snapshot.forEach((doc) => {
        const data = doc.data() as Omit<Pet, 'uid'>
        pets.push({
          uid: doc.id,
          ...data
        });
      });

      return pets;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch pets");
    }
  }
);

// add new my pet
export const AddPet = createAsyncThunk<Pet, AddPetPayload>(
  "pets/AddPet",
  async ({ values, sex, file }, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      let imgURL = "";

      if (file) {
        const storageRef = ref(firestore, `avatar/${file.name}`);
        await uploadBytes(storageRef, file);
        imgURL = await getDownloadURL(storageRef);
      }

      const newPet: Pet = {
        uid: crypto.randomUUID(),
        name: values.name,
        title: values.title,
        birthday: values.birthday,
        petType: values.petType,
        sex,
        image: imgURL,
        createdAt: new Date().toISOString(),
      };

      // добавляем в подколлекцию пользователя
      const userPetsRef = collection(database, `users/${user.uid}/mypets`);
      await addDoc(userPetsRef, newPet);
      return newPet;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// update profile my pet

export const updateProfileMyPets = createAsyncThunk<Pet, UpdatePetPayload>(
  "pets/updateProfileMyPets",
  async ({ uid, values }, thunkAPI) => {
    try {
      // check user auth
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      // update IMG
      let imgURL = "";

      if (values.file) {
        const storageRef = ref(firestore, `avatar/${values.file.name}`);
        await uploadBytes(storageRef, values.file);
        const imgURL = getDownloadURL(storageRef);
      }

      const petRef = doc(database, `users/${user.uid}/mypets${uid}`);

      const updatedData: Partial<Pet> = {
        name: values.name,
        title: values.title,
        birthday: values.birthday,
        petType: values.petType,
        sex: values.sex,
        ...( imgURL , {image: imgURL}),
      };

      await updateDoc(petRef, updatedData)

      return {
        uid,
        ...updatedData,
        image: imgURL || await((await getDoc(petRef)).data()?.image),
        createdAt: new Date().toISOString()
      } as Pet;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// delete pet profile
export const deletedPet = createAsyncThunk<string, string>(
  "pets/deletedPet",
  async (petId, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      const petRef = doc(database, `users/${user.uid}/mypets${petId}`)
      await deleteDoc(petRef)
      return petId
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
