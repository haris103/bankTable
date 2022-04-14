const intialstate = { loading: true, row: [] };
export const addFavouritesReducer = (state = intialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_FAVOURITE_SUCCESS": {
      state.row = [...state.row, payload[0]];
      return state;
    }
    case "REMOVE_FAVOURITE_SUCCESS":
      state.row = payload;
      return state;
    default:
      return state;
  }
};
