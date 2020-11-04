import React from "react";
import { StyledText } from "./../../+components/StyledText";
import { useQuery, gql } from "@apollo/client";

const MARKERS = gql`
  {
    getVersion
  }
`;

export const Version = () => {
  const { data, error } = useQuery(MARKERS);
  console.log(error);
  return <StyledText>Authorized</StyledText>;
};
