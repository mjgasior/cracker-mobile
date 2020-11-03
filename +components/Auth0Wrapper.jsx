import React, { useState } from "react";
import { AuthorizationContext } from "../+contexts/AuthorizationContext";

export const Auth0Wrapper = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AuthorizationContext.Provider
      value={{ auth, setAuth, isAuthorized, setIsAuthorized }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};
