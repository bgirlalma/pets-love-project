import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

interface OurFriends {
  uid: string;
  name: string;
  workTime: string;
  email: string;
  address: string;
  phone: string;
  img: string
}

export const fetchOurFriends = createAsyncThunk<OurFriends[], void>(
  "ourfriends/fetchOurFriends",
  async (_, thunkAPI) => {
    try {
      const ref = collection(firestore, "ourfriends");
      const snapshot = await getDocs(ref);

      const data: OurFriends[] = [];

      snapshot.forEach((doc) => {
        const collection = doc.data() as Omit<OurFriends, "uid">;

        data.push({
          uid: doc.id,
          ...collection,
        });
      });
    
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
