import { useContext } from "react";
import { AuthorizationContext } from "../+contexts/AuthorizationContext";

export const useAuthorizationContext = () => {
  const authContext = useContext(AuthorizationContext);
  return authContext;
};
