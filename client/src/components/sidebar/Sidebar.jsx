import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./sidebar.scss";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">HRTD MI</div>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <AccountBalanceIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <p className="title">USEFUL</p>
            <li>
              <EqualizerIcon className="icon" />
              <span>Status</span>
            </li>
            <li>
              <NotificationsIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <HealthAndSafetyIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div
            className="colorOptions"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOptions"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
