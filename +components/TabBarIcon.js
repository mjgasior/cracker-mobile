import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export const TabBarIcon = (props) => (
  <Ionicons
    name={props.name}
    size={30}
    style={{ marginBottom: -3 }}
    color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);
