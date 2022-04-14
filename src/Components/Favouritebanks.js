import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Removefavourites } from "../Redux/Actions/favourites.action";
// import Iconbtn2 from "./Iconbtn2";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Favouritebanks = ({ title }) => {
  const { data } = useSelector((state) => ({ data: state.addFavourite.row }));

  const [dataFromEnd, setDataFromEnd] = useState();
  const [select, setSelect] = useState(false);

  useEffect(() => {
    console.log("The use Effect has run");
    setDataFromEnd(data);
  }, [data]);

  const dispatch = useDispatch();

  const handleSelect = (item) => {
    console.log("Button_Item", item);
    setSelect(!select);
    dispatch(Removefavourites(item));
  };

  const columns2 = [
    {
      name: "Bank",
      selector: (row) => row["bank_name"],
      sortable: true,
      reorder: true,
    },
    {
      name: "IFSC",
      selector: (row) => row["ifsc"],
      // selector: "ifsc",
      sortable: true,
      reorder: true,
    },
    {
      name: "Branch",
      // selector: "branch",
      selector: (row) => row["branch"],
      sortable: true,
      reorder: true,
    },
    {
      name: "Branch ID",
      // selector: "bank_id",
      selector: (row) => row["bank_id"],
      sortable: true,
      reorder: true,
    },
    {
      name: "Address",
      // selector: "address",
      selector: (row) => row["address"],
      sortable: true,
      reorder: true,
    },
    {
      name: "Favourites",
      button: true,
      // cell: (r) => <Iconbtn2 item={r} />,
      cell: (r) => (
        // <div>
        //   {select ? (
        //     <IconButton onClick={() => handleSelect(r)}>
        //       <FavoriteIcon />
        //     </IconButton>
        //   ) : (
        //     <IconButton onClick={() => handleSelect(r)}>
        //       <FavoriteIcon />
        //     </IconButton>
        //   )}
        // </div>
        <IconButton onClick={() => handleSelect(r)}>
          <FavoriteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    // <div>
    <div>
      <DataTable
        title={title}
        columns={columns2}
        data={dataFromEnd}
        pagination
      />
    </div>
    // </div>
  );
};

export default Favouritebanks;
