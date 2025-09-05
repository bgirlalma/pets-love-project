import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = ""

const LocationSlice = createSlice({
    name: "locationPets",
    initialState,
    reducers: {
        setNoticesLocationPets(state, action: PayloadAction<string>) {
    return action.payload
        }
    }
})

export const { setNoticesLocationPets } = LocationSlice.actions;
export default LocationSlice.reducer
