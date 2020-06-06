import React from "react";
import styled from "styled-components/native";

const StyledImage = styled.Image`
  width: 200;
  height: 80;
  resize-mode: contain;
`;

export const Logo = () => (
  <StyledImage source={require("../../assets/images/cracker-name.png")} />
);
