
import { Link } from "react-router-dom"
import '../../styles/Home.css'

const PublicHeader = () => {
    return (
        <header className="header" id="header">
            <nav id="navbar">
                <div id="logo-container">
                    <Link to="/" className="logo link">
                        <img src="/icons/minex.png" alt="MinEx Logo" id="logo" />
                    </Link>
                    <h3>MinEx</h3>
                </div>
                <div className="navbar-right">
                    <ul className='navbar-items'>
                        <Link to="/login" className='link' id="login">Login</Link>
                        <Link to="/signup" className='link' id="signup">Signup</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default PublicHeader