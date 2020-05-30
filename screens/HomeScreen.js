import * as React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StyledText } from "../+components/StyledText";
import { useLocation } from "./+hooks/useLocation";
import { useMarkers } from "./+hooks/useMarkers";
import { getDistanceFromLatLonInKm, getAngle } from "./+utils/distance";
import { Marker } from "./+components/Marker";

export default function HomeScreen() {
  const location = useLocation();
  const { data } = useMarkers();

  const canShowDistance = location && data && data.markers.length > 0;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/cracker-name.png")}
            style={styles.welcomeImage}
          />

          {canShowDistance &&
            data.markers.map(({ position }, i) => {
              const distance = getDistanceFromLatLonInKm(
                location.coords.latitude,
                location.coords.longitude,
                position[0],
                position[1]
              );

              const angle = getAngle(
                location.coords.latitude,
                location.coords.longitude,
                position[0],
                position[1]
              );

              return <Marker key={i} distance={distance} angle={angle} />;
            })}
        </View>
      </ScrollView>

      {location && (
        <View style={styles.tabBarInfoContainer}>
          <StyledText>Your current location now:</StyledText>
          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
            <StyledText>Latitude: {location.coords.latitude}</StyledText>
            <StyledText>Longitude: {location.coords.longitude}</StyledText>
          </View>
        </View>
      )}
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
});
