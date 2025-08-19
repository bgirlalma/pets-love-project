import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = '';

const FilterNoticesPets = createSlice({
    name: 'noticesPets',
    initialState,
    reducers: {
        setFilterNotices(state, action: PayloadAction<string>) {
            return action.payload
        }
    }
})

export const { setFilterNotices } = FilterNoticesPets.actions
export default FilterNoticesPets.reducer