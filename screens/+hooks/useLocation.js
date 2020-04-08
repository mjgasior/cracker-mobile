import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const PERMISSIONS = {
  GRANTED: "granted",
};

export const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    async function setLocationWithPerms() {
      try {
        const permissions = await Permissions.askAsync(Permissions.LOCATION);

        if (permissions.status === PERMISSIONS.GRANTED) {
          const currentLocation = await Location.getCurrentPositionAsync({});
          setLocation(currentLocation);
        }
      } catch (error) {
        console.log(error);
      }
    }

    const intervalId = setInterval(setLocationWithPerms, 3000);
    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  return location;
};
