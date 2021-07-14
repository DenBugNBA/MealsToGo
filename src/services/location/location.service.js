import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not found location...");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  // const location = result.results[0];
  const formattedResponce = camelize(result);
  const { geometry = {} } = formattedResponce.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
