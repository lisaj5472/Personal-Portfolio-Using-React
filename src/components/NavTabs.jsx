import { Link } from "react-router-dom";
// import logo from "/src/assets/logo.png";

export default function NavTabs() {
  return (
    <nav>
      <div className="nav-left">
      <a href="/">
        <img src="/assets/logo.png" alt="LAJ Logo" className="logo" />
      </a> 
      <span className="name">Lisa Jorgensen</span>
      </div>
      <ul className="nav-right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}