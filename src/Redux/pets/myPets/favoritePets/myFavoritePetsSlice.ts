import { createSlice } from "@reduxjs/toolkit";
import { AddToFavorite, DeleteFavoritePet, FetchFavoritePets, TypeOfPets } from "./myFavoritePetsOptional";

interface FavoritePetState {
    favorites: TypeOfPets[];
    loading: boolean;
    error: string | null
}

const InitialState: FavoritePetState = {
  favorites: [],
  loading: false,
  error: null,
};

const FavoritePetsSlice = createSlice({
    name: "favorites",
    initialState: InitialState,
    reducers: {
        clearFavorite(state) {
    state.favorites = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchFavoritePets.pending, state => {
            state.loading = true
            state.error = null
        }).addCase(FetchFavoritePets.fulfilled, (state, action) => {
            state.loading = false;
            state.favorites = action.payload
            
        }).addCase(FetchFavoritePets.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string
        }).addCase(AddToFavorite.pending, state => {
            state.loading = true;
            state.error = null
        }).addCase(AddToFavorite.fulfilled, (state, action) => {
            state.loading = false
              state.favorites.push(action.meta.arg.pet);
        }).addCase(AddToFavorite.rejected, (state, action) => {
            state.loading = false;
         
        }).addCase(DeleteFavoritePet.pending, state => {
            state.loading = true;
            state.error = null
        }).addCase(DeleteFavoritePet.fulfilled, (state, action) => {
          state.loading = false;
          // Удаляем питомца по uid
          const petId = action.meta.arg.pet.uid;
          state.favorites = state.favorites.filter((f) => f.uid !== petId);
        }).addCase(DeleteFavoritePet.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string
        })
    }
})

export const { clearFavorite } = FavoritePetsSlice.actions
export default FavoritePetsSlice.reducer