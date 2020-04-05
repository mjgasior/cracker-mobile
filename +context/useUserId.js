import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUserId = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return user.user.uid;
  }
};
