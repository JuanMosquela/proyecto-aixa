import { Link } from "react-router-dom"
import './header.scss'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'
import { useState } from "react"

const services = [  
  'Content creator',
  'Product manager',
  'Fotografa',
  'Film maker'
]

const Header = () => {  

  const [menu, setMenu] = useState(false) 

  document.addEventListener('click', function(event) {
    if(!event.target.matches('.navbar_list') && !event.target.matches('.arrow')){
      setMenu(false)
    }
  });
  

  return (
    <header className="header-container">
        <nav>
            <ul>                
                  <li 
                    className="navbar-list"
                    onClick={() => setMenu(true)}>
                    Servicios 
                    {menu ? 
                      <MdOutlineKeyboardArrowUp 
                      className="arrow" 
                    /> : 
                      <MdOutlineKeyboardArrowDown 
                      className="arrow" />}
                    {
                      menu && (
                        <ul className="services-list">
                          {
                            services.map(li => (
                              <li key={li}>
                                <Link key={li} to={`/services/${li}`}>
                                  {li}
                                </Link>
                              </li>
                            ))
                          }
                          
                        </ul>
                      )
                    }
                  </li>
                
                <Link to='/'><li className="logo">Aixa Franzoni</li></Link>
                <Link to='/contact'><li className="navbar-list">Contacto</li></Link>
            </ul>
        </nav>
    </header>
  )
}
export default Header