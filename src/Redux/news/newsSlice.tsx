import { createSlice } from "@reduxjs/toolkit";
import { fetchInformation } from "./newsOptional";

interface News {
  uid: string;
  
    title: string;
    description: string;
    link: string;
    img: string;
    date: string;
}

interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInformation.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(fetchInformation.fulfilled, (state, action) => {
          state.loading = false;
          state.news = action.payload;
      }).addCase(fetchInformation.rejected, (state, action) => {
        state.loading = false;
        //   проблема может быть unknown, поэтому добавляет string
        state.error = action.payload as string;
      });
  },
});

export default NewsSlice.reducer
