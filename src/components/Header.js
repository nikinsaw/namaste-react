import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoPartOne from '../assets/logo_part_one.png'
import logoPartTwo from '../assets/logo_part_two.png'
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const currentLocation = useLocation();
  const [scrollPos, setScrollPos] = useState(0);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const handleScroll = (event) => {
      const currentScrollPos = window.scrollY;
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="header">
      <div className={(currentLocation.pathname === "/" && scrollPos < 5) && "home-logo-container" || "logo-container"} >
        <img className={`${currentLocation.pathname === "/" && scrollPos < 50 && 'logo-part-one-top'} logo-part-one`} src={logoPartOne} alt="logo" />
        <img className={`${currentLocation.pathname === "/" && scrollPos < 50 && 'logo-part-two-top'} logo-part-two`} src={logoPartTwo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus && "🟢" || "🔴"} </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/about" >About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => btnNameReact === "Logout" ? setBtnNameReact("Login") : setBtnNameReact("Logout")}>{btnNameReact}</button>
        </ul>
      </div>
    </div >
  );
};
export default Header;