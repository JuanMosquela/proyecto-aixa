import { Link, useNavigate} from "react-router-dom"
import './header.scss'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {BiMenuAltRight} from 'react-icons/bi'
import { useState } from "react"



const Header = () => { 

  const navigate = useNavigate()  

  const [menu, setMenu] = useState(false) 


  const [latMenu, setLatMenu] = useState(false)

  const handleClick = (li) => {
    console.log(li)    
    navigate(`services/${li}`)
  }

  const services = [  
    'Content creator',
    'Product manager',
    'Fotografa',
    'Film maker'
  ]
  

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
                              
                              <li key={li} onClick={() => handleClick(li)}>{li}</li>                              
                              
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
            <div className="lat-menu">
              <BiMenuAltRight className='lat-menu-icon' onClick={() => setLatMenu(!latMenu)} />              
              { 
                latMenu && (
                  <ul className='lat-menu-list'>
                    <Link to='/services'><li>Servicios</li></Link>
                    <Link to='/contact'><li>Contacto</li></Link>
                  </ul>
                )

              }
            </div>
        </nav>
    </header>
  )
}
export default Header