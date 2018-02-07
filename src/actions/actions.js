const base = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://aggro-api.herokuapp.com";

export const addSpots = spots => {
  return {
    type: "ADD_SPOTS",
    spots
  };
};

export const addSpotWithForecast = spots => {
  return {
    type: "ADD_SPOTS_WITH_FORECAST",
    spots
  };
};

export const fetchSpots = () => {
  return dispatch => {
    // fetch("http://aggro-api.herokuapp.com/api/v1/spots")
    fetch(`${base}/api/v1/spots`, {
      headers: { Authorization: sessionStorage.jwt }
    })
      .then(response => response.json())
      .then(spots => dispatch(addSpots(spots)));
  };
};

export const fetchSpotsWithForecast = () => {
  console.log('ENV!', process.env)
  return dispatch => {
    fetch(`${base}/api/v1/spots_with_forecast`)
      .then(res => res.json())
      .then(spots => dispatch(addSpotWithForecast(spots)));

    // const res = await fetch('http://localhost:3000/api/v1/spots_with_forecast')
    // const spots = await res.json()
    // dispatch(addSpotWithForecast(spots))
  };
};
