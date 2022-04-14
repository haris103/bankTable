// import React, { useState, useEffect } from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import IconButton from "@mui/material/IconButton";
// import { useDispatch } from "react-redux";
// import { Removefavourites } from "./../Redux/Actions/favourites.action";
// import { useSelector } from "react-redux";

// const Iconbtn2 = ({ item }) => {
//   const [select, setSelect] = useState(false);
//   const dispatch = useDispatch();

//   const handleSelect = () => {
//     setSelect(!select);
//     console.log("Button_Item", item);
//     dispatch(Removefavourites(item));
//   };
//   const { data } = useSelector((state) => ({ data: state.addFavourite.row }));
//   console.log("Updated", data);

//   return (
//     <div>
//       {select ? (
//         <FavoriteBorderIcon />
//       ) : (
//         <IconButton onClick={handleSelect}>
//           <FavoriteIcon />
//         </IconButton>
//       )}
//     </div>
//   );
// };

// export default Iconbtn2;
