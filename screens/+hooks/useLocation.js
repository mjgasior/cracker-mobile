import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const PERMISSIONS = {
  GRANTED: "granted",
};

export const useLocation = () => {
  const [location, setLocation] = useState();
  const [subscription, setSubscription] = useState();

  useEffect(() => {
    async function setLocationWithPerms() {
      try {
        const permissions = await Permissions.askAsync(Permissions.LOCATION);

        if (permissions.status === PERMISSIONS.GRANTED) {
          const subscriptionObject = await Location.watchPositionAsync(
            {
              accuracy: Location.Accuracy.Highest,
              enableHighAccuracy: true,
              distanceInterval: 1,
              timeInterval: 1000,
            },
            (locationData) => setLocation(locationData)
          );
          setSubscription(subscriptionObject);
        }
      } catch (error) {
        console.log(error);
      }
    }

    setLocationWithPerms();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return location;
};
