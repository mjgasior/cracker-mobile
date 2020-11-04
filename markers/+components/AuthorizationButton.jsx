import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyledText } from "../../+components/StyledText";
import styled from "styled-components/native";
import { login } from "./+utils/Authorization";
import { useAuthorizationContext } from "../../+hooks/useAuthorizationContext";
import { Version } from "./Version";

const ButtonContainer = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px;
`;

export const AuthorizationButton = () => {
  const [name, setName] = useState("");
  const { setAuth, isAuthorized, auth } = useAuthorizationContext();

  const onPressHandler = useCallback(async () => {
    const result = await login();
    setName(result.idToken.name);
    setAuth(result.accessToken);
  }, [setName, setAuth]);

  return (
    <>
      <TouchableOpacity onPress={onPressHandler}>
        <ButtonContainer>
          <StyledText>Log in</StyledText>
          <StyledText>Hello {name}</StyledText>
        </ButtonContainer>
      </TouchableOpacity>
      {isAuthorized && <Version />}
    </>
  );
};
