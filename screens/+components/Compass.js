import { Magnetometer } from "expo-sensors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Arrow } from "./Arrow";

export const Compass = () => {
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = React.useState(null);

  React.useEffect(() => {
    _subscribe();
    Magnetometer.setUpdateInterval(100);
    return () => {
      _unsubscribe();
    };
  }, []);

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((result) => {
        setData(result);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const { x, y } = data;
  let headingInRadians = Math.atan2(y, x);

  return (
    <View style={styles.sensor}>
      <View style={styles.buttonContainer}>
        <Arrow degree={headingInRadians} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
