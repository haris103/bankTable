export const Addfavourites = (m) => (dispatch) => {
  dispatch({
    type: "ADD_FAVOURITE_SUCCESS",
    payload: [m],
  });
};

export const Removefavourites = (item) => (dispatch, getState) => {
  const filteredData = getState().addFavourite.row.filter((m) => {
    return m.ifsc != item.ifsc;
  });
  dispatch({
    type: "REMOVE_FAVOURITE_SUCCESS",
    payload: filteredData,
  });
};
