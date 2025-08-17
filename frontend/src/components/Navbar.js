import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Contact Manager</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
