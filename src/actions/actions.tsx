/* eslint-disable no-unused-labels */
// import { SIGNIN } from "./actionTypes";
export const signin = (user: string) => ({
  type: "SIGNIN",
  payload: { user },
});

export const editUser = (user: string | undefined) => ({
  type: "EDIT_USER",
  payload: { user },
});
