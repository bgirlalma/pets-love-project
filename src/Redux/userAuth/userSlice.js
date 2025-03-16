import { createSlice } from "@reduxjs/toolkit"
import { loginUser, logoutUser, registerUser } from "./userOptions"


const initialState = {
  user: { name: null, email: null },
  isLogIn: false,
  isLoader: false,
  error: null,
};

console.log("Initial state before persist:", initialState);

const userSlice = createSlice({
    name: 'userAuth',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, state => {
            state.isLoader = true
        }).addCase(registerUser.fulfilled, (state, action) => {
             console.log("Register success:", action.payload);
            state.isLoader = false;
            state.user = {
              uid: action.payload.uid, // Записуємо тільки UID
              name: action.payload.displayName, // Ім'я користувача
              email: action.payload.email, // Email користувача
            };
            state.isLogIn = true;
             console.log("Register", action.payload);
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoader = false;
            state.error = action.payload
        }).addCase(loginUser.pending, state => {
            state.isLoader = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoader = false;
            state.isLogIn = true;
              state.user = {
                uid: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
            };
            console.log("Login",action.payload)
            
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoader = false;
            state.error = action.payload
        }).addCase(logoutUser.pending, state => {
             state.isLoader = true
        }).addCase(logoutUser.fulfilled, state => {
            state.isLoader = false;
           state.user = { uid: null, name: null, email: null }; 
           state.isLogIn = false; 
        }).addCase(logoutUser.rejected, (state, action) => {
            state.isLoader = false;
            state.error = action.payload
        })
    }
})

export const authReducer = userSlice.reducer;