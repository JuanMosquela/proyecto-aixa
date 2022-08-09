import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  

  const [latMenu, setLatMenu] = useState(false);

  const handleClick = (page) => { 
    navigate(`/${page}`)    
    setLatMenu(false)    
  };
  

  return (
    <header className="header-container">
      <nav>
        <ul>
          <Link to='/services'>
              <li
                className="navbar-list"
                onClick={() => handleClick}              
              >
                Servicios             
              </li>
          </Link>       

          <Link to="/">
            <li className="logo">Aixa Franzoni</li>
          </Link>
          <Link to="/contact">
            <li className="navbar-list">Contacto</li>
          </Link>
        </ul>
        <div className="lat-menu">
          <BiMenuAltRight
            className="lat-menu-icon"
            onClick={() => setLatMenu(!latMenu)}
          />
          {latMenu && (
            <ul className="lat-menu-list">              
              <li onClick={() => handleClick('services')}>Servicios</li>              
              <li onClick={() => handleClick('contact')}>Contacto</li>              
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
