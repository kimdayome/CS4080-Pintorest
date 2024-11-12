// Sidebar.js

import React from "react";
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="logo" src="/images/logo.jpg" alt="logo" /> 
            <ul className="menu-items">
                <li className="menu-item">
                    Home
                </li>
                <li className="menu-item active">
                    My profile
                </li>
                <li className="menu-item">
                    My Library
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;