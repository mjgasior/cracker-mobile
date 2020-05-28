import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import * as firebase from "firebase";
import { useUserId } from "../../+context/useUserId";

export const useSendMessage = (userId, message) => {
  try {
    firebase.database().ref(`users/${userId}`).set({ message });
  } catch (error) {
    console.error(error);
  }
};

export const useShowToast = () => {
  const userId = useUserId();
  useEffect(() => {
    firebase
      .database()
      .ref(`users/${userId}`)
      .on("value", (snapshot) => {
        const result = snapshot.val();

        ToastAndroid.showWithGravityAndOffset(
          `A wild toast appeared here! ${result.message}`,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      });
  }, []);
};
