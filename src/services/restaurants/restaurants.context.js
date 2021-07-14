import React, { useState, createContext, useEffect, useContext } from "react";

import { LocationContext } from "../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestraurantContext = createContext();

export const RestraurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  // console.log(locationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      // console.log(locationString);
      retrieveRestaurants(locationString);
    }
  }, [location]);

  // console.log(restaurants);

  return (
    <RestraurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestraurantContext.Provider>
  );
};
