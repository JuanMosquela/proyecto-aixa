import { Link } from "react-router-dom"
import './header.scss'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const Header = () => {
  return (
    <header className="header-container">
        <nav>
            <ul>
                <li className="navbar-list">Servicios <MdOutlineKeyboardArrowDown className="arrow" /></li>
                <Link to='/'><li className="logo">Aixa Franzoni</li></Link>
                <li className="navbar-list">Contacto</li>
            </ul>
        </nav>
    </header>
  )
}
export default Header