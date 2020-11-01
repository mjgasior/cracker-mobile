import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyledText } from "../../+components/StyledText";
import styled from "styled-components/native";
import * as AuthSessionNew from "expo-auth-session";
import JwtDecode from "jwt-decode";

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

  const onPressHandler = useCallback(async () => {
    const result = await login();
    setName(result.name);
  }, [setName]);

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <ButtonContainer>
        <StyledText>Log in</StyledText>
        <StyledText>Hello {name}</StyledText>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

const login = async () => {
  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  const redirectUrl = AuthSessionNew.getRedirectUrl();

  console.log(redirectUrl);

  console.error("CLIENT ID NOT SET!");
  // Structure the auth parameters and URL
  const params = {
    redirect_uri: redirectUrl,
    // response_type:
    // id_token will return a JWT token with the profile as described on the scope
    // token will return access_token to use with further api calls
    response_type: "token id_token",
    nonce: "nonce", // ideally, this will be a random value
    rememberLastLogin: true,
    client_id: "",
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

  const decodedJwtIdToken = JwtDecode(response.params.id_token);
  console.log(decodedJwtIdToken);

  /*
Object {
  "at_hash": "3T2WKPdwfLndzpgkiHU99Q",
  "aud": "KZZWiCz61h8DNxs1DSYxPM7xfxkLDEKF",
  "exp": 1604288416,
  "https://www.crackerapp.com": Object {
    "permissions": Array [
      "create:markers",
      "delete:markers",
      "update:markers",
    ],
  },
  "iat": 1604252416,
  "iss": "https://fulbert.eu.auth0.com/",
  "name": "michaljgasior@gmail.com",
  "nickname": "michaljgasior",
  "nonce": "nonce",
  "picture": "https://s.gravatar.com/avatar/905aaa7f9ebebb88f75ecf8469305547?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png",
  "sub": "auth0|5c598bee68a70b544c493993",
  "updated_at": "2020-11-01T17:23:24.644Z",
}
  */
  return decodedJwtIdToken;
};

const toQueryString = (params) =>
  "?" +
  Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
