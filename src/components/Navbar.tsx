import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>하늘</span>
        <span>Haneul</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vocabulary">Vocabulary</Link></li>
        <li><Link to="/collection">My Collection</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
