import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { useLocationApi } from "./useLocationApi";

const PERMISSIONS = {
  GRANTED: "granted",
};

export const useLocation = () => {
  const location = useLocationApi();
  const [locations, setLocations] = useState({
    current: { latitude: 0, longitude: 0 },
    previous: { latitude: 0, longitude: 0 },
  });

  useEffect(() => {
    if (location) {
      setLocations((prev) => {
        return {
          current: {
            ...location.coords,
          },
          previous: prev.current,
        };
      });
    }
  }, [location]);

  return locations;
};
