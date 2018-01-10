export const addSpots = spots => {
  return {
    type: "ADD_SPOTS",
    spots
  };
};

export const fetchSpots = () => {
  return dispatch => {
    // fetch("http://aggro-api.herokuapp.com/api/v1/spots")
    fetch("http://localhost:3000/api/v1/spots", {
      headers: {Authorization: sessionStorage.jwt}
    })
      .then(response => response.json())
      .then(spots => dispatch(addSpots(spots)));
  };
};
