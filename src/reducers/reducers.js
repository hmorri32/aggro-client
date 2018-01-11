export const spots = (state = [], action) => {
  switch (action.type) {
  case "ADD_SPOTS":
    state = [];
    return state.concat(action.spots);
  default:
    return state;
  }
};
