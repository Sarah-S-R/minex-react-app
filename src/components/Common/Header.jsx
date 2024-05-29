// src/components/Header.js
import React from 'react';
import './Header.css'; // Add this line to import your specific styles for Header

const Header = ({ openSidebar }) => {
    return (
        <header className="header">
            <div className="menu-icon" onClick={openSidebar}>
                <span className="material-icons-outlined">menu</span>
            </div>
            <div className="header-left">
                <div id="datetime"></div> {/* Container for date and time */}
            </div>
            <div className="header-right">
                <div className="dropdown">
                    <a className="dropdown-toggle" href="#" />
                </div>
                <div className="dropdown">
                    <a className="dropdown-toggle" href="./profile.html">
                        <span className="material-icons-outlined userAccountCircle">account_circle</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;


