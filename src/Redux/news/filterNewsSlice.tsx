import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = "";

const FilterNewsSlice = createSlice({
    name: "filterNewsPetsSlice",
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string>) {
            return action.payload
      }
    },
})

export const {setFilter} = FilterNewsSlice.actions
export default FilterNewsSlice.reducer