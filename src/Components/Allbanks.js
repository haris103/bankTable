import React from "react";
import DataTable from "react-data-table-component";

const Allbanks = ({ title, columns, data }) => {
  return (
    <div>
      <DataTable title={title} columns={columns} data={data} pagination />
    </div>
  );
};

export default Allbanks;
