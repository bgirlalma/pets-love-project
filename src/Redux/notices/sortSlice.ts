import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  value: "" | "popular" | "unpopular" | "cheap" | "expensive";
};

const initialState: SortState = { value: "" };

const SortSlice = createSlice({
  name: "noticesSort",
  initialState,
  reducers: {
    setSortPets(state, actions: PayloadAction<SortState['value']>) {
      state.value = actions.payload;
    },
  },
});

export const { setSortPets } = SortSlice.actions;
export default SortSlice.reducer