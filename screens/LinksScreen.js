import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { sendMessage } from "./useDatabase";

const StyledInput = styled.TextInput`
  font-size: 16px;
  text-align: center;
  color: #0f4c81;
  margin-top: 10px;
  height: 40px;
  border: 1px solid gray;
`;

export default function LinksScreen() {
  const [message, onSetMessage] = useState("Message for the user");
  const [userNumber, onSetUserNumber] = useState("133");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View>
        <Button
          onPress={() => sendMessage(userNumber, message)}
          title="Click"
        />

        <StyledInput
          onChangeText={text => onSetUserNumber(text)}
          value={userNumber}
        />

        <StyledInput
          onChangeText={text => onSetMessage(text)}
          value={message}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  contentContainer: {
    paddingTop: 15
  }
});
