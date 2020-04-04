import { useState, useContext } from "react";
import * as firebase from "firebase";
import { UserContext } from "../../+context/UserContext";

const isPasswordValid = p => {
  if (p === undefined || p.length < 5) {
    alert("Password has to be longer");
    return false;
  }
  return true;
};

export const useAuthorization = () => {
  const { setUser } = useContext(UserContext);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const signUp = () => {
    if (!isPasswordValid(password)) {
      return;
    }

    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => setUser(user));
    } catch (error) {
      console.log(error.toString());
    }
  };

  const login = () => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => setUser(user));
    } catch (error) {
      console.log(error.toString());
    }
  };

  return { setPassword, setEmail, login, signUp };
};

export const useLogout = () => {
  const { setUser } = useContext(UserContext);

  const logout = () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => setUser());
    } catch (error) {
      console.log(error.toString());
    }
  };

  return logout;
};
