
import { useState } from 'react';
import Sidebar from '../components/Common/Sidebar';
import Header from '../components/Common/Header'; 

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const openSidebar = () => {
        handleToggleSidebar()
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        handleToggleSidebar()
        setSidebarOpen(false);
    };

    const handleToggleSidebar = () => {
        const grid_container = document.getElementById('db-sb-container')

        if (!grid_container) return null;

        grid_container.style.gridTemplateAreas = 
            sidebarOpen ? 
            `"header header header header" "main main main main"`
            :
            `"sidebar header header header" "sidebar main main main"`;

    }

    return (
        <div className="grid-container" id="db-sb-container">
            <Header openSidebar={openSidebar} sidebarOpen={sidebarOpen}/>
            { sidebarOpen && <Sidebar closeSidebar={closeSidebar} /> }
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

