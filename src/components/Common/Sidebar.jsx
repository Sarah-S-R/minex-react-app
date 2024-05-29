// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Add this line to import your specific styles for Sidebar

const Sidebar = ({ closeSidebar }) => {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <span className="logoIcon"><img src="./icons/minex.png" alt="MinEx Logo" />MinEx</span>
                </div>
                <div className="close-icon" onClick={closeSidebar}>
                    <span className="material-icons-outlined">close</span>
                </div>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="./dashboard.html">
                        <span className="material-icons-outlined">dashboard</span>Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="./clients.html">
                        <span className="material-icons-outlined">groups</span>Clients
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="./projects.html">
                        <span className="material-icons-outlined">inventory_2</span>Projects
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="./locations.html">
                        <span className="material-icons-outlined">map</span>Locations
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="./index.html" className="logout">
                        <span className="material-icons-outlined">logout</span>Log Out
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
