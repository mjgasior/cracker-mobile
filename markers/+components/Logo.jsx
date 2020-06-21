import React from "react";
import styled from "styled-components/native";

const StyledImage = styled.Image`
  width: 200px;
  height: 80px;
  resize-mode: contain;
`;

export const Logo = () => (
  <StyledImage source={require("../../+assets/images/cracker-name.png")} />
);
