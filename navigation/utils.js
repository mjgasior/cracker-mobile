export const INITIAL_ROUTE_NAME = "Home";

export const getHeaderTitle = (route) => {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Cracker";
  }
};
