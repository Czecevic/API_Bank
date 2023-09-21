/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

// declare le type
interface AuthState {
  user: string | null;
}

// la valeur initial de l'user
const initialAuthState: AuthState = {
  user: null,
};

export const authReducer = createSlice({
  name: "userAuth",
  initialAuthState,
  reducers: {
    connexion: (state) => {
      state.user = "user";
    },
  },
});

export const { connexion } = authReducer.actions;
