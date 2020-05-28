import React from "react";
import { useInitialize } from "./+hooks/useInitialize";
import { MainScreen } from "./screens/MainScreen";

export default function App(props) {
  const {
    containerRef,
    isLoadingComplete,
    initialNavigationState,
  } = useInitialize();

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <MainScreen
        containerRef={containerRef}
        initialNavigationState={initialNavigationState}
      />
    );
  }
}
