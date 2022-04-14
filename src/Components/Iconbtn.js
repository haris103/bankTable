import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { Addfavourites } from "./../Redux/Actions/favourites.action";

const Iconbtn = ({ item }) => {
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();

  const handleSelect = () => {
    setSelect(!select);
    console.log("Item", item);
    dispatch(Addfavourites(item));
  };

  return (
    <div>
      {select ? (
        <FavoriteIcon />
      ) : (
        <IconButton onClick={handleSelect}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Iconbtn;
