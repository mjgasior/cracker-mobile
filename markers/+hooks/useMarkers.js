import { useQuery, gql } from "@apollo/client";

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
