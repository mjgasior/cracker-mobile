import { useQuery, gql } from "@apollo/client";

const MARKERS = gql`
  {
    markers {
      _id
      latitude
      longitude
      imageFilename
      polish {
        name
        description
      }
      english {
        name
        description
      }
    }
  }
`;

export const useMarkers = () => useQuery(MARKERS);
