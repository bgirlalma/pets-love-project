import { createSlice } from "@reduxjs/toolkit"
import { loginUser, logoutUser, registerUser } from "./userOptions"

const initialState = {
    user: { name: null, email: null, password: null },
    isLogIn: false,
    isLoader: false
}

const userSlice = createSlice({
    name: 'userAuth',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, state => {
            state.isLoader = true
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoader = false;
            state.user.uid = action.payload.uid;
            state.user.name = action.payload.displayName;
            state.user.email = action.payload.email;
            state.isLogIn = true;
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoader = false;
            state.error = action.payload
        }).addCase(loginUser.pending, state => {
            state.isLoader = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
          state.isLoader = false;
          state.isLogIn = true;
          state.user = action.payload; // Сохранение данных пользователя
          state.user.uid = action.payload.uid;
          state.user.name = action.payload.displayName;
          state.user.email = action.payload.email;
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoader = false;
            state.error = action.payload
        }).addCase(logoutUser.pending, state => {
             state.isLoader = true
        }).addCase(logoutUser.fulfilled, state => {
            state.isLoader = false;
            state.isLogIn = false;
            state.user = {name: null, email: null, password: null}
        }).addCase(logoutUser.rejected, (state, action) => {
            state.isLoader = false;
            state.error = action.payload
        })
    }
})

export const authReducer = userSlice.reducer;