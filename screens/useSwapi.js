import { useState, useEffect } from "react";
import * as firebase from "firebase";

export const useSwapi = () => {
  const [starship, setStarship] = useState();

  useEffect(() => {
    async function fetchAStarship() {
      try {
        const response = await fetch("https://swapi.co/api/starships/9/");
        const responseJson = await response.json();

        setStarship(responseJson);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAStarship();
  }, []);

  return starship;
};
