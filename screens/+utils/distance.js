export function getAngle(lat1, lon1, lat2, lon2) {
  const deltaX = lat1 - lat2;
  const deltaY = lon1 - lon2;

  if (deltaY === 0) {
    return 0;
  }

  const radians = Math.atan(deltaX / deltaY);
  if (deltaY < 0) {
    return radians + Math.PI;
  }
  return radians;
}

export function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c; // Distance in km

  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
