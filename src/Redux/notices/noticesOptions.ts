import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

interface TypeOfPets {
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
  city?: string
}
export const fetchDifferentPets = createAsyncThunk<TypeOfPets[], void>(
  "listofdifferentpets/fetchDifferentPets",
  async (_, thunkAPI) => {
      try {
          const ref = collection(firestore, "listofdifferentpets");
          const snapshot = await getDocs(ref)

          const data: TypeOfPets[] = []
          
          snapshot.forEach((doc) => {
              const petsCollection = doc.data() as Omit<TypeOfPets, "uid">
              // console.log(doc.id, doc.data());
              data.push({
                uid: doc.id,
                ...petsCollection,
              });
          })
  // console.log("Fetched notices:", data);
          return data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
