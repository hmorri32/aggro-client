export const spots = (state = [], action) => {
  switch (action.type) {
    case "ADD_SPOTS":
      state = [];
      return state;
    default:
      return state;
  }
};
