import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

const PERMISSIONS = {
  GRANTED: "granted",
};

export const useHeading = () => {
  const [heading, setHeading] = useState();
  const [subscription, setSubscription] = useState();

  useEffect(() => {
    async function setHeadingWithPerms() {
      try {
        const permissions = await Permissions.askAsync(Permissions.LOCATION);

        if (permissions.status === PERMISSIONS.GRANTED) {
          const subscriptionObject = await Location.watchHeadingAsync(
            (headingData) => setHeading(headingData)
          );
          setSubscription(subscriptionObject);
        }
      } catch (error) {
        console.log(error);
      }
    }

    setHeadingWithPerms();

    return () => subscription.remove();
  }, []);

  return heading;
};
