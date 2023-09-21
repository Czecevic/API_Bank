import { configureStore } from "@reduxjs/toolkit";
import { connexion } from "./User.stores";

export const store = configureStore({
  reducer: {
    user: connexion,
  },
});
