export const INITIAL_ROUTE_NAME = "Home";

export function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Cracker";
    case "Links":
      return "Links to learn more";
  }
}
