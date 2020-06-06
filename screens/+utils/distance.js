export function getAngle(lat1, lon1, lat2, lon2) {
  const deltaX = lat1 - lat2;
  const deltaY = lon1 - lon2;

  if (deltaY === 0) {
    return 0;
  }

  if (Math.abs(deltaX) < 0.000001 && Math.abs(deltaY) < 0.000001) {
    console.log("This is too small");
    return 0;
  }

  return Math.atan(deltaX / deltaY);
}

export function getAngle2(latA, lonA, latB, lonB, lat0, lon0) {
  const x1 = latA - lat0;
  const y1 = lonA - lon0;
  const x2 = latB - lat0;
  const y2 = lonB - lon0;

  return getAngle(x1, y1, x2, y2);
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
