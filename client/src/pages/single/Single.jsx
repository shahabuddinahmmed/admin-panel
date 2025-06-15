import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
      <>
        <div className="single">
          <Sidebar />
          <div className="singleContainer">
            <Navbar />
            <div className="top">
              <div className="left">
                <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                <div className="item">
                  <img className="itemImg" src="https://taabc.org/wp-content/uploads/2015/11/Untitled-1.png" alt="" />
                  <div className="details">
                    <h2 className="itemTitle">Test UserName</h2>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">example@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">012545575</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemValue">Mirpur 10, Dhaka</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <Chart aspect = {4/1} title="User Spending ( Last 6 Months )" />
              </div>
            </div>
            <div className="bottom">
              <h1 className="title">Latest transactions</h1>
              <List />
            </div>
          </div>
        </div>
      </>
  )
}

export default Single