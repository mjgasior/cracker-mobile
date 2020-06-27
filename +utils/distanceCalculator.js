export function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const earthRadiusInKm = 6371;
  const deltaLatitude = degreesToRadians(lat2 - lat1);
  const deltaLongitude = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(deltaLongitude / 2) *
      Math.sin(deltaLongitude / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distanceInKm = earthRadiusInKm * c;

  return distanceInKm;
}

function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}

export function formatDistance(distance) {
  if (distance < 1) {
    const meters = Math.ceil(distance * 1000);
    return `${meters} m`;
  }
  return `${distance.toPrecision(3)} km`;
}
