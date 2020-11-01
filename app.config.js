export default {
  expo: {
    name: "Cracker",
    slug: "cracker",
    platforms: ["ios", "android", "web"],
    version: "1.0.0",
    orientation: "portrait",
    icon: "./+assets/images/icon.png",
    scheme: "myapp",
    splash: {
      image: "./+assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#0F4C81",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: "./+assets/images/favicon.png",
    },
    android: {
      package: "com.mjgasior.cracker",
      versionCode: 1,
      config: {
        googleMaps: {
          apiKey: "<paste API key here>",
        },
      },
    },
    extra: {
      apiAddress: "cracker.red",
    },
  },
};
