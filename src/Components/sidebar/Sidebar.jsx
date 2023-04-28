import React from "react";
import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TimelineIcon from '@mui/icons-material/Timeline';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import MovingIcon from '@mui/icons-material/Moving';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from './../../context/darkModeContext';

import {useContext} from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
      
      <Link to="/" style={{ textDecoration: "none" }}>
      <span className="logo">ERP System</span>
    </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Dashboard</p>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LineStyleIcon className="icon"/>
            <span>Home</span>
            </Link>
          </li>
    
          <p className="title">LISTS</p>

         
          <li>
          <Link to="/employee" style={{ textDecoration: "none" }}>

            <GroupsIcon className="icon" />
            <span>Employees</span>
            </Link>
          </li>
          <li>

            <Link to="/distributer" style={{ textDecoration: "none" }}>

            <PersonOutlineIcon className="icon" />
            <span>Distributor</span>
            </Link>
          </li>
          
          <li>
          <Link to="/supplier" style={{ textDecoration: "none" }}>

            <MovingIcon className="icon" />
            <span>Suppliers</span>
            </Link>
          </li>

          <li>
          <Link to="/supplierorders" style={{ textDecoration: "none" }}>

            <CreditCardIcon className="icon" /> 
            <span>Supplier Orders</span>

             
            </Link>
          </li>
          <li>
          <Link to="/customer" style={{ textDecoration: "none" }}>

            <PeopleAltIcon className="icon" />
            <span>Customers</span>
            </Link>
          </li>
          <p className="title">Products</p>
          <li>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <StoreIcon className="icon" />
          <span>AllProducts</span>

             
            </Link>
          </li>
          <li>
          <Link to="/productsinventory" style={{ textDecoration: "none" }}>

              <AccountBalanceIcon className="icon" />
              <span>productsinventory</span>
            </Link>
          </li>
          <p className="title">RawMatrials</p>
          <li>
          <Link to="/rawmatrial" style={{ textDecoration: "none" }}>

            <AutoAwesomeMotionIcon className="icon" />
            <span>RawMaterial</span>
            </Link>
          </li>
          <li>
          <Link to="/rawmatrialinventory" style={{ textDecoration: "none" }}>
          
            <Inventory2OutlinedIcon className="icon" />
            <span>RawMaterialInventory</span>
            </Link>
          </li>
          <p className="title">Categeroy</p>
          <li>
          <Link to="/category" style={{ textDecoration: "none" }}>

            <CategoryIcon className="icon" /> <span>Category</span>
            </Link>
          </li>
          <p>............................</p>
          <li>
          <Link to="/manufactur" style={{ textDecoration: "none" }}>

            <AcUnitIcon className="icon" />
            <span>Manufacturing</span>
            </Link>
          </li>
          <li>
          <Link to="/report" style={{ textDecoration: "none" }}>

          <AssessmentIcon className="icon" />
          
            <span>Reports</span>
            </Link>
          </li>
       
         
         
         

          
        
          <li>
          <Link to="/delivery" style={{ textDecoration: "none" }}>

            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
            </Link>
          </li>
          <li>
          <Link to="/financial" style={{ textDecoration: "none" }}>

            <AttachMoneyIcon className="icon" />
            <span>Financial</span>
            </Link>
          </li>
          <li>
          <Link to="/stock" style={{ textDecoration: "none" }}>

            <Inventory2OutlinedIcon className="icon" />
            <span>Stock</span>
            </Link>
          </li>
          <li>
          <Link to="/hr" style={{ textDecoration: "none" }}>

            <AssignmentIndIcon className="icon" />
            <span>HR</span>
            </Link>
          </li>
          <p className="title">Sales</p>
          <li>
          <Link to="/overview" style={{ textDecoration: "none" }}>
            <PointOfSaleIcon className="icon"/>
            <span>Overview</span>
            </Link>
          </li>

          <li>
          <Link to="/daily" style={{ textDecoration: "none" }}>
            <TodayOutlinedIcon className="icon"/>
            <span>Daily</span>
            </Link>
          </li>
          <li>
          <Link to="/monthly" style={{ textDecoration: "none" }}>
            <CalendarMonthOutlinedIcon className="icon"/>
            <span>Monthly</span>
            </Link>
          </li>
          
          <p className="title">Analysis</p>

          <li>
          <Link to="/analysis" style={{ textDecoration: "none" }}>

            <TimelineIcon className="icon"/>
            
            <span>Analysis</span>
            </Link>
          </li>
          <li>
          <Link to="/report" style={{ textDecoration: "none" }}>

          <AssessmentIcon className="icon" />
          
            <span>Reports</span>
            </Link>
          </li>
          <p className="title">SERVICE</p>
          <li>
          <Link to="/system-health" style={{ textDecoration: "none" }}>

            <SettingsSystemDaydreamOutlinedIcon className="icon" />{" "}
            <span>System Health</span>
            </Link>
          </li>
          <li>
          <Link to="/logs" style={{ textDecoration: "none" }}>

            <PsychologyOutlinedIcon className="icon" /> <span>Logs</span>
            </Link>
          </li>
          <li>
          <Link to="/setting" style={{ textDecoration: "none" }}>

            <SettingsApplicationsIcon className="icon" /> <span>Settings</span>
            </Link>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
          <Link to="/profile" style={{ textDecoration: "none" }}>

            <AccountCircleOutlinedIcon className="icon" /> <span>Profile</span>
            </Link>
          </li>
          <li>
          <Link to="/logout" style={{ textDecoration: "none" }}>

            <ExitToAppIcon className="icon" /> <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
      <div className="colorOption"  onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
}

export default Sidebar;
