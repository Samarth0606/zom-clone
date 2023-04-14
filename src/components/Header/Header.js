import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.webp";
// import { Link } from "@mui/material";
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <span>Get the App</span>
        <div className="right">
          <span>Investor Relations</span>
          <span>Add restaurant</span>
          <span> <Link to='/login' > Log In </Link> </span>
          <span><Link to='/signup' > Sign Up </Link> </span>
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restaurants</span>
            <span> <Link to='/login'> Log In </Link> </span>
            <span> <Link to='/signup' > Sign Up </Link> </span>
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Discover the best food & drinks in Chitkara</h3>
        <div className="input">
          <select name="" id="">
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          |
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
