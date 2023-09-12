/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";

// declare le type
interface AuthState {
  user: string | null;
}

// la valeur initial de l'user
const initialAuthState: AuthState = {
  user: null,
};

const authReducer = (state = initialAuthState, action: any) => {
  switch (action.type) {
    // connexion
    case "SIGNIN": {
      return { ...state, user: action.payload.userId };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
});
