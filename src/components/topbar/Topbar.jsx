import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className="topLeft">
                <span className='logo'>BAYZ_STORE</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://t4.ftcdn.net/jpg/05/01/05/43/360_F_501054388_VZbc7yJLhngas2T4eKgGgdJBCKA2fSs8.jpg" alt="" className="topAvater" />
            </div>
        </div>
    </div>
  )
}

export default Topbar