import React from "react";
import { Image, StyleSheet, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { MonoText } from "../components/StyledText";
import { useLocation } from "./+hooks/useLocation";
import { useSwapi } from "./+hooks/useSwapi";
import { useLogout } from "./+hooks/useAuthorization";

const CustomizedText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #0f4c81;
`;

const LogoContainer = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export default function HomeScreen() {
  const location = useLocation();
  const starship = useSwapi();
  const logout = useLogout();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <LogoContainer>
            <Image
              source={require("../assets/images/cracker-logo.png")}
              style={styles.welcomeImage}
            />
          </LogoContainer>

          <Button title="Log out" onPress={logout} />

          {location && (
            <>
              <CustomizedText>Your current location:</CustomizedText>
              <View
                style={[
                  styles.codeHighlightContainer,
                  styles.homeScreenFilename
                ]}
              >
                <MonoText>Latitude: {location.coords.latitude}</MonoText>
                <MonoText>Longitude: {location.coords.longitude}</MonoText>
              </View>
            </>
          )}
          {starship && <CustomizedText>{starship.model}</CustomizedText>}

          <CustomizedText>
            The color of the app is the Pantone Classic Blue #0F4C81
          </CustomizedText>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  }
});
