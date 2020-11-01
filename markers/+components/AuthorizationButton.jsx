import * as React from "react";
import { TouchableOpacity } from "react-native";
import { StyledText } from "../../+components/StyledText";
import styled from "styled-components/native";
import * as AuthSessionNew from "expo-auth-session";

const ButtonContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px;
`;

export const AuthorizationButton = () => {
  return (
    <TouchableOpacity onPress={login}>
      <ButtonContainer>
        <StyledText>Log in</StyledText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

const login = async () => {
  AuthSessionNew.makeRedirectUri();
};
