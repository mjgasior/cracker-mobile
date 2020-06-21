import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const MARKERS = gql`
  {
    markers {
      latitude
      longitude
      name
      description {
        polish
        english
      }
      _id
    }
  }
`;

export const useMarkers = () => useQuery(MARKERS);
