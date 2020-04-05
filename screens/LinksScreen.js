import React, { useState, useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { useSendMessage, useShowToast } from "./+hooks/useDatabase";
import { useUserId } from "../+context/useUserId";

const StyledInput = styled.TextInput`
  font-size: 16px;
  text-align: center;
  color: #0f4c81;
  margin-top: 10px;
  height: 40px;
  border: 1px solid gray;
`;

export default function LinksScreen() {
  const userId = useUserId();
  const [message, setMessage] = useState("Message for the user");

  useShowToast();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Button
          onPress={() => useSendMessage(userId, message)}
          title="Send to me!"
        />

        <StyledInput
          onChangeText={(text) => setMessage(text)}
          value={message}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
});
