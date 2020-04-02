import * as firebase from "firebase";

export const sendMessage = (userId, message) => {
  try {
    firebase
      .database()
      .ref(`users/${userId}`)
      .set({ message });
  } catch (error) {
    console.error(error);
  }
};
