![Cracker app logo](/assets/images/logo.svg)

# cracker-mobile

_"Crack the history of Krakow with the Cracker app!"_

Big thanks to :octocat: [thomsa](https://github.com/thomsa) and :octocat: [barlima](https://github.com/barlima) for time and advice. :clap:

This is a React Native app. I got pretty frustrated during the development. If you wonder why, check out [this rant link](https://www.reddit.com/r/reactnative/comments/7syoxz/react_native_is_bad_rant/) which kind of explains some of my feelings towards React Native and Expo. I would say that a dev gets an emotional sinusoid - when something works, it works awesome, but when it doesn't that is when the hell starts.

## Setup:

### Firebase setup:

To start this app you need Firebase configuration. Go to `Project settings`, there, at the bottom of the page, is the `Your apps` section where after selecting `Config` in `Firebase SDK snippet` you will get the `firebaseConfig` object. It looks more or less like this:

```
const firebaseConfig = {
  apiKey: "KJG438sd-asaiaHFASu76Asa7as9ahz8aJHSfas",
  authDomain: "cracker-app-domain.firebaseapp.com",
  databaseURL: "https://cracker-app-domain.firebaseio.com",
  projectId: "cracker-app-domain",
  storageBucket: "cracker-app-domain.appspot.com",
  messagingSenderId: "856734251014",
  appId: "1:856734251014:web:adfg7dfgq4ag8adfh483af",
  measurementId: "D-ABA8LL9AG7"
};
```

You should create a file in `constants` directory called `ApiKeys.js` and paste the configuration in this way:

```
export default {
  FirebaseConfig: {
    apiKey: "KJG438sd-asaiaHFASu76Asa7as9ahz8aJHSfas",
    authDomain: "cracker-app-domain.firebaseapp.com",
    databaseURL: "https://cracker-app-domain.firebaseio.com",
    projectId: "cracker-app-domain",
    storageBucket: "cracker-app-domain.appspot.com",
    messagingSenderId: "856734251014",
    appId: "1:856734251014:web:adfg7dfgq4ag8adfh483af",
    measurementId: "D-ABA8LL9AG7"
  },
};
```

Current Firebase realtime database rules:

```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": true,
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## Packages:

- `firebase` - you need credentials to setup the DB connection pasted in constants/ApiKeys
- `native-base` - there were some issues with fonts so it is hardcoded into 2.13.8 version instead of 2.13.12 - [issue explained here](https://github.com/expo/vector-icons/issues/119)
- `styled-components` - allows to write plain CSS in components without worrying about class name collisions, it helps to write CSS that's scoped to a single component and does not leak to any other element in the page

## Resources:

- [Unsure Programmer YouTube channel about React Native](https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg/videos)
