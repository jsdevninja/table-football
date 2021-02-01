import { TOGGLE_LOADING } from "./types";

export const toggleLoading = (isLoading) => ({
  type: TOGGLE_LOADING,
  payload: { isLoading },
});
