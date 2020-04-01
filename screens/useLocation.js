import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    async function setLocationWithPerms() {
      const permissions = await Permissions.askAsync(Permissions.LOCATION);

      if (permissions.status === "granted") {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      }
    }

    setInterval(setLocationWithPerms, 3000);
  }, []);

  return location;
};
