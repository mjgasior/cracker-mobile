# Cracker app

This is a React Native app. I got pretty frustrated during the development. If you wonder why, check out this rant link which kind of explains some of my feelings towards React Native and Expo. I would say that a dev gets an emotional sinusoid - when something works, it works awesome, but when it doesn't that is when the hell starts.
https://www.reddit.com/r/reactnative/comments/7syoxz/react_native_is_bad_rant/

**Used stuff**

- Styled Components
- Firebase (you need credentials to setup the DB connection pasted in constants/ApiKeys)
- Native Base (there were some issues with fonts so it is hardcoded into 2.13.8 version instead of 2.13.12 - issue explained here https://github.com/expo/vector-icons/issues/119)

**Useful stuff**

- https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg/videos

**Current Firebase realtime database rules**

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
