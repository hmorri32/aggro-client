import * as types from "./actionTypes";

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

export function logOutUser() {
  sessionStorage.removeItem("jwt");
  return { type: types.LOG_OUT };
}
