import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
// import * as Location from "expo-location";

export const useLocation = () => {
  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    async function setLocationWithPerms() {
      const resp = await Permissions.askAsync(Permissions.LOCATION);
      setPermissions(resp);
    }
    setLocationWithPerms();
  }, []);

  return permissions;
};
