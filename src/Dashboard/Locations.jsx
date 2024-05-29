import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/dashstyles.css'; 
import Sidebar from '../components/Common/Sidebar';
import Header from '../components/Common/Header'; 
import Footer from '../components/Common/Footer';

const Locations = () => {
  const history = useHistory();

  useEffect(() => {
    //  Google Maps
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    // Initialize Google Maps
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    window.initMap = initMap;
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCPAP1GZvsgQ4MiTpXjokIbSKd9Ro3b2pI&libraries=places&callback=initMap');
  }, []);

  // Functions for locations (addLabel, deleteAllLabels)
  const addLabel = () => {
    // ADD here
  };

  const deleteAllLabels = () => {
    // ADD here
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="menu-icon" onClick={() => console.log('Open sidebar')}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header-left">
          <div id="datetime"></div>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <a className="dropdown-toggle" href="#"></a>
          </div>
          <div className="dropdown">
            <a className="dropdown-toggle" href="/profile">
              <span className="material-icons-outlined userAccountCircle">account_circle</span>
            </a>
          </div>
        </div>
      </header>

      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="logoIcon"><img src="./icons/minex.png" alt="MinEx Logo" />MinEx</span>
          </div>
          <div className="close-icon" onClick={() => console.log('Close sidebar')}>
            <span className="material-icons-outlined">close</span>
          </div>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="/dashboard">
              <span className="material-icons-outlined">dashboard</span>Dashboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/clients">
              <span className="material-icons-outlined">groups</span>Clients
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/projects">
              <span className="material-icons-outlined">inventory_2</span>Projects
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/locations">
              <span className="material-icons-outlined">map</span>Locations
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/" className="logout">
              <span className="material-icons-outlined">logout</span>Log Out
            </a>
          </li>
        </ul>
      </aside>

      <main className="main-container">
        <div className="main-title">
          <h2>LOCATIONS</h2>
        </div>
        <div id="map"></div>
        <form id="labelForm">
          <label htmlFor="labelInput">Add Location:</label>
          <input type="text" id="labelInput" placeholder="Enter label" />
          <button type="button" id="addLocationBtn" onClick={addLabel}>Add</button>
          <button type="button" id="deleteAllBtn" onClick={deleteAllLabels}>Delete All</button>
        </form>
      </main>
    </div>
  );
};

export default Locations;
