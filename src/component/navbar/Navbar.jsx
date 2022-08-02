import React from 'react'
import "./Navbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
    return (
        <div className="topbar">
            <div className="contendwrapper">
                <div className="rightcontend">
                    <span className="title">Behind India</span>
                </div>
                <div className="leftcontend">
                    <NotificationsNoneIcon className='iconfuture' />
                    <span className="count">5</span>
                    <LanguageIcon className='iconfuture'/>
                    <span className="count">2</span>
                    <SettingsIcon className='iconfuture'/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8nMX1CvcLPpcmhd2ERboFt4ZeZ9hp0QuzW0PW6Udtcnl49bb-Zh6zn2RMa7wke9ohTA&usqp=CAU" alt="" className="profile" />
                </div>
            </div>
        </div>
    )
}

