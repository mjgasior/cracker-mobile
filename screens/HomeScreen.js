import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import styled from "styled-components/native";

import { MonoText } from "../components/StyledText";
import { useLocation } from "./useLocation";
import { useSwapi } from "./useSwapi";

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

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require("../assets/images/robot-dev.png")
                : require("../assets/images/robot-prod.png")
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

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
        </View>

        <LogoContainer>
          <Image
            source={require("../assets/images/cracker-logo.png")}
            style={styles.welcomeImage}
          />
        </LogoContainer>

        <View style={styles.helpContainer}>
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

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        This is an app for tourism. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
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
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
