![Cracker app logo](/+assets/images/logo.svg)

# cracker-mobile

_"Crack Kraków with the Cracker app!"_

Big thanks to :octocat: [thomsa](https://github.com/thomsa) and :octocat: [barlima](https://github.com/barlima) for time and advice. :clap:

This is a React Native app. I got pretty frustrated during the development. If you wonder why, check out [this rant link](https://www.reddit.com/r/reactnative/comments/7syoxz/react_native_is_bad_rant/) which kind of explains some of my feelings towards React Native and Expo. I would say that a dev gets an emotional sinusoid - when something works, it works awesome, but when it doesn't that is when the hell starts.

## Setup:

0. If you don't have the `expo-cli` already, run `npm install expo-cli --global` (currently used version is `expo-cli@3.21.3` with `node@v12.16.1` and `npm@6.13.4`). It's also good to have the `Expo` [app installed on your phone](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pl). Remember that if you use the Expo phone app, the phone and the laptop have to be in the same network (for example, connected to the same Wi-fi spot).
1. `yarn`
2. Define the API address in the `app.json` file in `apiAddress` property.
3. To run the project run `yarn start` (please remember, that a bare init of `expo-cli` can have `expo start` instead of `yarn/npm start`).

## Release:

### Prepare API key:

Unfortunately, `react-leaflet` which is a React port of JavaScript library `leafletjs` which provides API for OpenStreetMaps needs a browser DOM, so the only reasonable way to use it is to nest a [WebBrowser component](https://docs.expo.io/versions/latest/sdk/webbrowser/) and set the whole thing inside. There is a package that actually picks up this idea ([react-native-webview-leaflet](https://github.com/reggie3/react-native-webview-leaflet)), but I was not 100% convinced if I want to go that way. That is why Cracker is using Google Maps API.

For debugger mode on the cell phone, the Google Maps API key is not necessary. If you want to create a release of an `.apk` installation file you will need to configure your Google APIs account. For this, you can use the setup manual that you can find in [MapView documentaion on Expo](https://docs.expo.io/versions/latest/sdk/map-view/), but as a first step I recommend to _not specify_ application restrictions in credentials section. If you do, you might have [a keytool problem](https://stackoverflow.com/questions/6211919/errorkeytool-is-not-recognized-as-an-internal-or-external-command-operable-p) while generating the SHA-1. This instruction is based on [a StackOverflow answer](https://stackoverflow.com/questions/57598520/react-native-maps-with-expo).

**Remember! Don't commit your API key! Paste it only for release purposes.**

0. Create Google APIs account.
1. Create Google Maps API key without application restrictions (leave the default `None` setting).
2. Copy the `API Key` and paste it into `app.json` into `android` > `config` > `googleMaps` > `apiKey` section as in example:

```
"android": {
    "package": "com.mjgasior.cracker",
    "versionCode": 1,
    "config": {
        "googleMaps": {
            "apiKey": "<paste API key it here>"
        }
    }
},
```

### Release a standalone version installed directly on the device:

This manual is based on the [Expo documentation](https://docs.expo.io/distribution/building-standalone-apps/).

0. You have to have [an Expo account](https://expo.io/signup). You will be asked to log in with those credentials in the console during the build process.
1. Run `expo build:android`. Any additional instructions will be present in the console.
2. The build, depending on the queue, takes around 15 minutes and is not done locally. After that time you will get a URL where you can find necessary files. If you have picked the `apk` option to test the app release on the phone, use the provided link from the build to download the `.apk` file.
3. Download the [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools) from Android Developers website. It includes the `adb` tool, that is Android Debug Bridge. [Extract the contents](https://www.xda-developers.com/install-adb-windows-macos-linux/) of this ZIP file into an easily accessible folder (such as `C:\adb`).
4. Turn on the USB debug mode on you phone. Usually you can start with tapping multiple times on the version in settings section, what unlocks the `{} Developer options` section. There you can find an switch which will allow USB debugging.
5. Open Powershell, Git Shell or any of those in the directory where the `adb.exe` is and run `./adb.exe devices`. Your device should be listed.
6. Copy the `.apk` file to the directory where ythe `adb.exe` file is and run `./adb.exe install your-app-filename.apk`.
7. After the `adb` console returns a message as below, the app should be available on your phone:

```
PS C:\android\platform-tools> .\adb.exe install cracker.apk
Performing Streamed Install
Success
```

## Packages:

- `@apollo/react-hooks` - integration with Apollo based on React hooks
- `apollo-boost` - package containing everything you need to set up Apollo Client (bare `@apollo/client` was lacking a comfortable way of [adding authorization header](https://www.apollographql.com/docs/react/networking/authentication/#header "Apollo GQL docs") to all GQL requests)
- `graphql` - the JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook
- `react-native-maps` - provides a Map component that uses Apple Maps or Google Maps on iOS and Google Maps on Android
- `styled-components` - allows to write plain CSS in components without worrying about class name collisions, it helps to write CSS that's scoped to a single component and does not leak to any other element in the page

## Resources:

- [Calculate distance between two latitude-longitude points? (Haversine formula)](https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula)
- [Heading API in Expo](https://docs.expo.io/versions/latest/sdk/location/#locationgetheadingasync)
- [Latitude/Longitude Distance Calculator](https://www.nhc.noaa.gov/gccalc.shtml)
- [Unsure Programmer YouTube channel about React Native](https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg/videos)
