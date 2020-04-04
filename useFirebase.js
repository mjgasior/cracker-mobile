import { useEffect } from "react";
import ApiKeys from "./constants/ApiKeys";
import * as firebase from "firebase";

export const useFirebase = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }, []);
};
