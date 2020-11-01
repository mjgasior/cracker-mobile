import * as AuthSession from "expo-auth-session";
import JwtDecode from "jwt-decode";
import Constants from "expo-constants";

export const login = async () => {
  const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });

  const params = {
    redirect_uri: redirectUrl,
    response_type: "token id_token",
    nonce: "nonce",
    rememberLastLogin: true,
    client_id: Constants.manifest.extra.clientId,
    scope: "openid profile",
    audience: "https://cracker.app",
  };

  const queryParams = toQueryString(params);
  const authUrl = `https://${Constants.manifest.extra.authDomain}/authorize${queryParams}`;

  const response = await AuthSession.startAsync({
    authUrl,
    showInRecents: true,
  });

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
