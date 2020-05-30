import { useState, useEffect } from "react";

export const useMarkers = () => {
  const [markers, setMarkers] = useState([{ position: [50, 19] }]);

  useEffect(() => {
    async function getMarkers() {
      try {
        const response = await fetch("http://3.123.202.199/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            operationName: null,
            variables: {},
            query:
              "{\n  markers {\n    position\n    _id\n    __typename\n  }\n}\n",
          }),
        });

        const responseJson = await response.json();
        setMarkers(responseJson.data.markers);
      } catch (error) {
        console.error(error);
      }
    }

    getMarkers();
  }, []);

  return markers;
};
