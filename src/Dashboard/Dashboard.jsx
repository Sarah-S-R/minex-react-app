
import React, { useState } from 'react';
import Sidebar from '../components/Common/Sidebar';
import Header from '../components/Common/Header'; 
import Footer from '../components/Common/Footer';
import Login from '../components/Auth/Login';
import './Dashboard.css'; 

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="grid-container">
            <Header openSidebar={openSidebar} />
            {sidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
            <main className="main-container">
                <div className="main-title">
                    <h2>DASHBOARD</h2>
                </div>
                <div className="welcome-container" id="welcome-container">
                    <h2>Welcome back</h2>
                </div>
                <div className="main-cards">
                    <button onClick={() => window.location.href = './clients.html'} className="card">
                        <div className="card">
                            <div className="card-inner">
                                <span className="material-icons-outlined">groups</span>
                                <h3>CLIENTS</h3>
                            </div>
                            <h1 id="clientCount"></h1>
                        </div>
                    </button>

                    <button onClick={() => window.location.href = './projects.html'} className="card">
                        <div className="card">
                            <div className="card-inner">
                                <span className="material-icons-outlined">inventory_2</span>
                                <h3>PROJECTS</h3>
                            </div>
                            <h1 id="projectCount"></h1>
                        </div>
                    </button>

                    <button onClick={() => window.location.href = './locations.html'} className="card">
                        <div className="card">
                            <div className="card-inner">
                                <span className="material-icons-outlined">map</span>
                                <h3>LOCATIONS</h3>
                            </div>
                            <h1 id="markerCount"></h1>
                        </div>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

