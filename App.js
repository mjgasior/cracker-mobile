import React from "react";
import { useInitialize } from "./+hooks/useInitialize";

import HomeScreen from "./screens/HomeScreen";

export default function App(props) {
  const {
    containerRef,
    isLoadingComplete,
    initialNavigationState,
  } = useInitialize();

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return <HomeScreen />;
  }
}
