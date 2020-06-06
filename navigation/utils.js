const INITIAL_ROUTE_NAME = "Markers";

export const getInitialRoute = () => INITIAL_ROUTE_NAME;

export const getHeaderTitle = (route) => {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Markers":
      return "Cracker markers";
  }
};
