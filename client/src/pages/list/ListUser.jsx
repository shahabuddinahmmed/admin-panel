import React from "react";
import DatatableUser from "../../components/datatable/DatatableUser";
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
          <DatatableUser />
        </div>
      </div>
    </>
  );
};

export default List;
