import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StyledText } from "../+components/StyledText";
import { useLocation } from "./+hooks/useLocation";
import { useMarkers } from "./+hooks/useMarkers";
import { getDistanceFromLatLonInKm, getAngle2 } from "./+utils/distance";
import { Marker } from "./+components/Marker";
import { Logo } from "./+components/Logo";

export default function HomeScreen() {
  return <View></View>;
}
