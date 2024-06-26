import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css'; // Ensure you have material-icons installed or include it in your HTML


const Header = () => {
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
      <div className="menu-icon" onClick={() => console.log("Menu clicked")}>
        <span className="material-icons">menu</span>
      </div>
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





