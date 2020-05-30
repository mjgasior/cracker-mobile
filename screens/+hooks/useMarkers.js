import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const MARKERS = gql`
  {
    markers {
      position
      _id
    }
  }
`;

export const useMarkers = () => useQuery(MARKERS);
