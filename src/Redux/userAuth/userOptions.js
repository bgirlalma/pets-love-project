import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth} from '../../firebase/firebase'

export const registerUser = createAsyncThunk('pets-userAuth/registerUser', async (newuser, thunkApi) => {
    try {
        // створюємо користувача
        await createUserWithEmailAndPassword(
            auth,
            newuser.email,
            newuser.password,
        )

        // оновлення профилю
        await updateProfile(auth.currentUser, { displayName: newuser.name });

        // отримуємо данні поточного користувача
        const { uid, displayName, email } = auth.currentUser;

        return { uid, displayName, email };
    } catch (error) {
       return  thunkApi.rejectWithValue(error.message)
    }
})

export const loginUser = createAsyncThunk('pets-userAuth/loginUser', async (user, thunkApi) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password
        )
     
        const { uid, displayName, email } = userCredential.user;
        
        return {uid, displayName, email}
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const logoutUser = createAsyncThunk('pets-userAuth', async (useId, thunkApi) => {
    try {
        const res = await signOut(auth)
        return res
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})