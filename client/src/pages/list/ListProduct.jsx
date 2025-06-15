import React from "react";
import DatatableProduct from "../../components/datatable/DatatableProduct";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = () => {
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <DatatableProduct />
        </div>
      </div>
    </>
  );
};

export default List;
