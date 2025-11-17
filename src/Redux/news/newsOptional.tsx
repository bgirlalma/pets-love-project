import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

interface News {
  uid: string;
    title: string;
    description: string;
    link: string;
    img: string;
    date: string;

}

export const fetchInformation = createAsyncThunk<News[], void>(
  "news/fetchInformation",
  async (_, thunkAPI) => {
    try {
      // получает коллекцию
      const ref = collection(firestore, `news`);
      // проверяет существует ли коллекция
      const snapshot = await getDocs(ref);

      const newsPets: News[] = [];
      // если да, то
      snapshot.forEach((doc) => {
          const data = doc.data() as Omit<News, "uid">
          // console.log("🔥 doc.id:", doc.id);
          // console.log("🔥 doc.data():", data);
        newsPets.push({
          uid: doc.id,
          ...data
        });
      });
      return newsPets;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
