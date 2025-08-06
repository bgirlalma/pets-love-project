import { createSlice } from "@reduxjs/toolkit";
import { AddPet, deletedPet, fetchPets, updateProfileMyPets } from "./myPetsOptional";

interface Pet {
  uid: string;
  name: string;
  title: string;
  birthday: string;
  petType: string;
  sex: "male" | "female" | "unknown";
  createdAt: string;
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
const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add Pets
      .addCase(AddPet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddPet.fulfilled, (state, action) => {
        state.loading = false;
        state.pets.push(action.payload);
      })
      .addCase(AddPet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Something went wrong";
      })
      // fetchPets
      .addCase(fetchPets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to fetch pets";
      })
      // updated pets
      .addCase(updateProfileMyPets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileMyPets.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.pets.findIndex((p) => p.uid === action.payload.uid);
        if (index !== -1) {
          state.pets[index] = action.payload;
        }
      })
      .addCase(updateProfileMyPets.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed update Pet";
      })
      // deleted pets
      .addCase(deletedPet.pending, (state) => {
        state.loading = true;
        state.error = null
      }).addCase(deletedPet.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = state.pets.filter(p => p.uid !== action.payload)
      }).addCase(deletedPet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Failed delete Pet"
      })
  },
});

export default petSlice.reducer;
