export const addSpots = spots => {
  return {
    type: "ADD_SPOTS",
    spots
  };
};

export const fetchSpots = () => {
  return dispatch => {
    fetch("http://aggro-api.herokuapp.com/api/v1/spots")
      .then(response => response.json())
      .then(spots => dispatch(addSpots(spots)));
  };
};
