import { configureStore, combineReducers } from "@reduxjs/toolkit";
import teachersReducer from "./teachers/teachersSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authSlice } from "./auth/authReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReduser = combineReducers({
  teachers: persistReducer(persistConfig, teachersReducer),
  [authSlice.name]: persistReducer(persistConfig, authSlice.reducer),
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
