import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavTabs() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="LAJ Logo" className="logo" />
      </a>  
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}