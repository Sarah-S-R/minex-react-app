import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashstyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'; // Ensure you have the fontawesome library installed
import 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined';
import ReactDOM from 'react-dom'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

ReactDOM.render(element, document.body)

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="menu-icon" onClick={toggleSidebar}>
          <span className="material-icons-outlined">{sidebarOpen ? 'close' : 'menu'}</span>
        </div>
        <div className="header-left">
          <div id="datetime">{/* Container for date and time */}</div>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <Link to="/profile" className="dropdown-toggle">
              <span className="material-icons-outlined userAccountCircle">account_circle</span>
            </Link>
          </div>
        </div>
      </header>

      <aside id="sidebar" className={sidebarOpen ? 'sidebar-open' : ''}>
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="logoIcon"><img src="./icons/minex.png" alt="MinEx Logo" />MinEx</span>
          </div>
          <div className="close-icon" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Link to="/dashboard">
              <span className="material-icons-outlined">dashboard</span>Dashboard
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/clients">
              <span className="material-icons-outlined">groups</span>Clients
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/projects">
              <span className="material-icons-outlined">inventory_2</span>Projects
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/locations">
              <span className="material-icons-outlined">map</span>Locations
            </Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/" className="logout">
              <span className="material-icons-outlined">logout</span>Log Out
            </Link>
          </li>
        </ul>
      </aside>

      <main className="main-container">
        <div className="main-title">
          <h2>PROFILE</h2>
        </div>
        <section id="profile-section" style={{ display: editMode ? 'none' : 'block' }}>
          <div className="profile-info" id="profile-info">
            <img className="profile-picture" id="profile-picture" src="./img/woman-icon.jpg" alt="Profile Picture" />
            <h3 id="username">Sarah Ryan</h3>
            <p id="bio">Web Developer</p>
          </div>
          <br />
          <button id="edit-profile-btn" onClick={toggleEditMode}>Edit Profile</button>
        </section>

        <section id="edit-section" style={{ display: editMode ? 'block' : 'none' }}>
          <div className="edit-form-container">
            <form id="edit-form">
              <label htmlFor="new-username"></label>
              <input type="text" id="new-username" required placeholder="New Username..." />
              
              <label htmlFor="new-bio"></label>
              <input type="text" id="new-bio" required placeholder="New Role Title..." />
              
              <label htmlFor="new-profile-picture"></label>
              <input type="url" id="new-profile-picture" placeholder="New profile picture URL..." />
              
              <button className="profile-update-btn" type="submit">Save Changes</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
