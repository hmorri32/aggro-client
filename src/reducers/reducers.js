export const spots = (state = [], action) => {
  switch (action.type) {
  case "ADD_SPOTS":
    state = [];
    return state.concat(action.spots);
  default:
    return state;
  }
};

export const spotsWithForecast = (state = [], action) => {
  switch (action.type) {
  case "ADD_SPOTS_WITH_FORECAST":
    state = [];
    return state.concat(action.spots);
  default:
    return state;
  }
};
