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
  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  const redirectUrl = AuthSessionNew.getRedirectUrl();

  console.log(redirectUrl);

  // Structure the auth parameters and URL
  const params = {
    redirect_uri: redirectUrl,
    // response_type:
    // id_token will return a JWT token with the profile as described on the scope
    // token will return access_token to use with further api calls
    response_type: "token id_token",
    nonce: "nonce", // ideally, this will be a random value
    rememberLastLogin: true,
    client_id: "PASTE ID HERE",
    scope: "openid profile",
    audience: `https://cracker.app`,
  };

  const queryParams = toQueryString(params);
  const authUrl = `https://fulbert.eu.auth0.com/authorize${queryParams}`;

  // const response = await WebBrowser.openBrowserAsync(authUrl, {showInRecents: true});
  // const response = await WebBrowser.openAuthSessionAsync(authUrl, {showInRecents: true});
  const response = await AuthSessionNew.startAsync({
    authUrl,
    showInRecents: true,
  });

  // const response = await startAuth(authUrl);
  return handleLoginResponse(response);
};

const handleLoginResponse = (response) => {
  if (response.error || response.type !== "success") {
    return;
  }

  console.log(response.params);

  /*
  Object {
  "access_token": "",
  "exp://192.168.1.12:19000/--/expo-auth-session": "",
  "expires_in": "7200",
  "id_token": "",   
  "scope": "openid profile",
  "token_type": "Bearer",
    }
  */
  return response.params.id_token;
};

const toQueryString = (params) =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
