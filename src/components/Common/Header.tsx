import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css'; // Ensure you have material-icons installed or include it in your HTML
import MenuIcon from '@mui/icons-material/Menu';


const Header = ({
  openSidebar,
  sidebarOpen = false
}:{
  openSidebar: () => void,
  sidebarOpen: boolean
}) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleString();
  };

  return (
    <header className="header">
      {
        !sidebarOpen &&
        <MenuIcon 
            sx={{
                margin: 2,
                ml: 4,
                width: 36,
                height: 36,
                cursor: 'pointer'
            }}
            onClick={() => openSidebar()}
        />
      }
      <div className="header-left">
        <div id="datetime">{formatDateTime(dateTime)}</div>
      </div>
      <div className="header-right">
        <div className="dropdown">
          <a className="dropdown-toggle" href="#">
            {/* Add dropdown content here */}
          </a>
        </div>      
        <div className="dropdown">
          <Link to="/profile" className="dropdown-toggle">
            <span className="material-icons">account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;





