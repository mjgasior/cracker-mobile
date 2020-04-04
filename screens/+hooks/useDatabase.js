import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import * as firebase from "firebase";

export const useSendMessage = (userId, message) => {
  try {
    firebase
      .database()
      .ref(`users/${userId}`)
      .set({ message });
  } catch (error) {
    console.error(error);
  }
};

export const useShowToast = () => {
  useEffect(() => {
    firebase
      .database()
      .ref("users/133")
      .on("value", snapshot => {
        const result = snapshot.val();

        ToastAndroid.showWithGravityAndOffset(
          `A wild toast appeared! ${result.message}`,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      });
  }, []);
};
