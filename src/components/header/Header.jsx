import { Link } from "react-router-dom"
import './header.scss'

const Header = () => {
  return (
    <header className="header-container">
        <nav>
            <ul>
                <li className="navbar-list">Servicios</li>
                <Link to='/'><li className="logo">Aixa Franzoni</li></Link>
                <li className="navbar-list">Contacto</li>
            </ul>
        </nav>
    </header>
  )
}
export default Header