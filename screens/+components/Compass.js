import { Magnetometer } from "expo-sensors";
import React from "react";
import LPF from "lpf";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    LPF.init([]);
    LPF.smoothing = 0.2;
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

  const _angle = (magnetometer) => {
    let angle = 0;
    if (magnetometer) {
      let { x, y } = magnetometer;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(LPF.next(angle));
  };

  const _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };

  return (
    <View style={styles.sensor}>
      <View style={styles.buttonContainer}>
        <Arrow degree={_degree(_angle(data)) * (Math.PI / 180)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
