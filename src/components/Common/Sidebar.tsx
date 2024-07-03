
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css'; // Ensure you have material-icons installed or included in your HTML

const Sidebar = ({
  closeSidebar
}:{
  closeSidebar: () => void
}) => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <span className="logoIcon">
            <img src="/icons/minex.png" alt="MinEx Logo" />MinEx
          </span>
        </div>
        <div className="close-icon" onClick={() => closeSidebar()}>
          <span className="material-icons">close</span>
        </div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <span className="material-icons">dashboard</span>Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/clients">
            <span className="material-icons">groups</span>Clients
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/projects">
            <span className="material-icons">inventory_2</span>Projects
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/locations">
            <span className="material-icons">map</span>Locations
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/properties">
            <span className="material-icons">home</span>Properties
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/login" className="logout">
            <span className="material-icons">logout</span> Log Out
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

