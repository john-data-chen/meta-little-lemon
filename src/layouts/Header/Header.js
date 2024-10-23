import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/hamburgerMenu.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickImage = () => {
    navigate("/");
  };

  const menuItems = [
    { id: "home", label: "Home", link: "/" },
    { id: "menu", label: "Menu", link: "/menu" },
    { id: "booking", label: "Booking", link: "/booking" },
    { id: "order", label: "Order", link: "/orders" },
    { id: "login", label: "Login", link: "/login" },
    { id: "about", label: "About", link: "/about" },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" height={50} onClick={onClickImage} />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
    </header>
  );
};

export default Header;
