import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './userAuth/userSlice'
import updateSlice from './UserUpdate/userUpdateSlice'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userAuth"],
};

const rootReduce = combineReducers({
  userAuth: userSlice,
  userUpdate: updateSlice
});

const persistedReducer = persistReducer(persistConfig, rootReduce)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch