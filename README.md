![Cracker app logo](/assets/images/logo.svg)

# cracker-mobile

_"Crack the history of Krakow with the Cracker app!"_

Big thanks to :octocat: [thomsa](https://github.com/thomsa) and :octocat: [barlima](https://github.com/barlima) for time and advice. :clap:

This is a React Native app. I got pretty frustrated during the development. If you wonder why, check out [this rant link](https://www.reddit.com/r/reactnative/comments/7syoxz/react_native_is_bad_rant/) which kind of explains some of my feelings towards React Native and Expo. I would say that a dev gets an emotional sinusoid - when something works, it works awesome, but when it doesn't that is when the hell starts.

## Setup:

0. Remember to get `expo` installed before you start development. It's also good to have the `Expo` app installed on your phone.
1. `npm i`
2. Define the API address in the markers hook (`cracker-mobile\screens\+hooks\useMarkers.js`).
3. Just a regular `npm start`.

## Packages:

- `native-base` - there were some issues with fonts so it is hardcoded into 2.13.8 version instead of 2.13.12 - [issue explained here](https://github.com/expo/vector-icons/issues/119)
- `styled-components` - allows to write plain CSS in components without worrying about class name collisions, it helps to write CSS that's scoped to a single component and does not leak to any other element in the page

## Resources:

- [Calculate distance between two latitude-longitude points? (Haversine formula)
  ](https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula)
- [Latitude/Longitude Distance Calculator](https://www.nhc.noaa.gov/gccalc.shtml)
- [Unsure Programmer YouTube channel about React Native](https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg/videos)
