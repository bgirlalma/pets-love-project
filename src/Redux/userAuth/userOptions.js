import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateCurrentUser } from 'firebase/auth'
import { auth} from '../../firebase/firebase'

export const registerUser = createAsyncThunk('pets-userAuth/registerUser', async (newuser, thunkApi) => {
    try {
        await createUserWithEmailAndPassword(
            auth,
            newuser.name,
            newuser.email,
            newuser.password

        )

        await updateCurrentUser(auth.currentUser, { displayName: newuser.name })
        const { uid, displayName, email } = auth.currentUser;

        return { uid, displayName, email };
    } catch (error) {
       return  thunkApi.rejectWithValue(error.message)
    }
})