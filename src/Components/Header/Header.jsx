import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [ham_menu, setHam_menu] = useState(false);
  const getMenuStyles = (ham_menu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !ham_menu && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src="./atlassian_jira_logo_icon_170511.png"
          alt="No Image"
          width={35}
        />

        <OutsideClickHandler onOutsideClick={()=>{setHam_menu(false)}}>
          <div className="flexCenter h-manu" style={getMenuStyles(ham_menu)}>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/Admin">Admin</Link>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setHam_menu((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
