import { createSlice } from "@reduxjs/toolkit";
import { fetchDifferentPets } from "./noticesOptions";

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

interface PropsState {
  pets: TypeOfPets[];
  loading: boolean;
  error: string | null;
}

const initialState: PropsState = {
  pets: [],
  loading: false,
  error: null,
};

const NoticesPetsSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchDifferentPets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDifferentPets.fulfilled, (state, action) => {
        state.pets = action.payload;
        state.loading = false;
      })
      .addCase(fetchDifferentPets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      }),
});

export default NoticesPetsSlice.reducer
