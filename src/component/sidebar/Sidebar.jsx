import React from 'react'
import "./sidebar.css"

// Dashbord icons
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// Collection menu
import ManIcon from '@mui/icons-material/Man';
// import WomanIcon from '@mui/icons-material/Woman';
// import ChildCareIcon from '@mui/icons-material/ChildCare';
// Status icon
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ClearIcon from '@mui/icons-material/Clear';
//Nofiactions
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwerapper">
            <div className="sidebarmenu">
                <h3 className="menutitle">Dasboard</h3>
                <ul className="manuItemList">
                    <NavLink to= "/"  
                    className={({isActive})=> isActive ?"Item active" : "link"
                    
                }>
                    <li className="Item ">
                    <HomeIcon className='icon'/>
                    Home
                    </li>
                    </NavLink>
                    <li className="Item">
                    <TimelineIcon className='icon'/>
                    Analytics
                    </li>
                    <li className="Item">
                    <TrendingUpIcon className='icon'/>
                    Sales
                    </li>
                </ul>
                <h3 className="menutitle">Collection Menu</h3>
                <ul className="manuItemList">
                    <NavLink to="/user"    className={({isActive})=> isActive ? "Item active" : "link"
                    
                } >
                    <li className="Item ">
                        <ManIcon/>
                    User
                    </li>
                    </NavLink>
                   
                </ul>
                <h3 className="menutitle">Status</h3>
                <ul className="manuItemList">
                    <li className="Item">
                    <CheckIcon className='icon'/>
                    Order Status
                    </li>
                    <li className="Item">
                    <AccessTimeFilledIcon className='icon'/>
                    Bending Status
                    </li>
                    <li className="Item">
                    <ClearIcon className='icon'/>
                    Cancelled Status
                    </li>
                </ul>
                <h3 className="menutitle">Nofications</h3>
                <ul className="manuItemList">
                    <li className="Item">
                    <MailOutlineIcon className='icon'/>
                    Mails
                    </li>
                    <li className="Item">
                    <FeedbackIcon className='icon'/>
                    Feedbacks
                    </li>
                    <li className="Item">
                    <ReportGmailerrorredIcon className='icon'/>
                    Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
