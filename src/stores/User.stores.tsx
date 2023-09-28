/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

// declare le type
export interface AuthState {
  firstName: string;
  lastName: string;
}

// la valeur initial de l'user
const initialState: AuthState = {
  firstName: "",
  lastName: "",
};

export const authReducer = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<AuthState>) => {
      const { firstName, lastName } = action.payload;
      (state.firstName = firstName), (state.lastName = lastName);
    },
    deconnectUser: (state) => {
      (state.firstName = ""), (state.lastName = "");
    },
  },
});

export const { updateUser, deconnectUser } = authReducer.actions;
export const selectUser = (state: RootState) => state.user;
export default authReducer.reducer;
