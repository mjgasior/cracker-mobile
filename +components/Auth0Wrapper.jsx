import React, { useState } from "react";
import { AuthorizationContext } from "../+contexts/AuthorizationContext";

export const Auth0Wrapper = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthorizationContext.Provider value={(auth, setAuth)}>
      {children}
    </AuthorizationContext.Provider>
  );
};
