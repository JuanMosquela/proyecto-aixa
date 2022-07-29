import { Link, useNavigate, useParams } from "react-router-dom"
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

  const navigate = useNavigate()
  

  const [menu, setMenu] = useState(false) 

  

  const handleClick =  (li) =>{   

    navigate(`/services/${li}`)
    
  } 

  

  return (
    <header className="header-container">
        <nav>
            <ul>
                
                <Link to='/services'>
                <li 
                    className="navbar-list"                                    
                    onMouseEnter={() => setMenu(true)}
                    onMouseLeave={() => setMenu(false)}>
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
                              
                              <li onClick={() => handleClick(li)}>{li}</li>
                              
                            ))
                          }
                          
                        </ul>
                      )
                    }
                  </li>
                </Link>
                
                <Link to='/'><li className="logo">Aixa Franzoni</li></Link>
                <Link to='/contact'><li className="navbar-list">Contacto</li></Link>
            </ul>
        </nav>
    </header>
  )
}
export default Header