import { createSlice } from "@reduxjs/toolkit";
import { fetchOurFriends } from "./ourfriendsOptional";


interface OurFriends {
  uid: string;
  name: string;
  workTime: string;
  email: string;
  address: string;
  phone: string;
  img: string
}

interface OurFriendsState {
  ourfriends: OurFriends[];
  loading: boolean;
  error: string | null;
}

const initialState: OurFriendsState = {
  ourfriends: [],
  loading: false,
  error: null,
};

const OurFriendsSlice = createSlice({
  name: "ourfriends",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchOurFriends.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOurFriends.fulfilled, (state, action) => {
        
          state.ourfriends = action.payload
            state.loading = false;
      })
      .addCase(fetchOurFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      }),
});

export default OurFriendsSlice.reducer;