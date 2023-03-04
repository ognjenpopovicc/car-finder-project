import { redirect } from "react-router-dom";

export const protectedRoute = (currentUser) => {
  if (!currentUser) {
    return redirect(`/login`);
  }

  return null;
};
