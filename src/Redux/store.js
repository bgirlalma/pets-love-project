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
import { authReducer } from "./userAuth/userSlice";
import useSerealize from "./hooks/serealizeHook/serealizeHook";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userAuth"],
  transforms: [useSerealize]
};

const rootReduce = combineReducers({
userAuth: authReducer
})

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