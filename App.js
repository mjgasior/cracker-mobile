import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useFirebase } from "./+hooks/useFirebase";
import { useInitialize } from "./+hooks/useInitialize";

import { MainScreen } from "./screens/MainScreen";
import { UserContext } from "./+context/UserContext";

export default function App(props) {
  useFirebase();
  const {
    containerRef,
    isLoadingComplete,
    initialNavigationState,
  } = useInitialize();

  const [user, setUser] = useState();

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <MainScreen
          user={user}
          containerRef={containerRef}
          initialNavigationState={initialNavigationState}
        />
      </UserContext.Provider>
    );
  }
}
