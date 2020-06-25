import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { HidingBar } from "../../+components/HidingBar";

export const NavigatorBar = ({ coordinate, initialRegion, name, isHidden }) => {
  return (
    <HidingBar isHidden={isHidden}>
      <View style={styles.codeHighlightContainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={initialRegion}
          showsUserLocation={true}
        >
          <Marker
            coordinate={coordinate}
            title={name}
            description="Desctiption"
          />
        </MapView>
      </View>
    </HidingBar>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});
