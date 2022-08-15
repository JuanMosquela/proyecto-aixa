import { Link } from 'react-router-dom';
import './about.scss';
import dataServices from '../../data/dataServices';
import { useEffect, useState } from 'react';
import {MdOutlineArrowForwardIos} from 'react-icons/md'


const About = () => {

  const [services, setServices] = useState([])

  useEffect(() => {

    setServices(dataServices)
    
  }, [])
  


  return (
    <section className="about">

      <div className='container-row'>
        <figure className='container-profile'>
          <img className='profile-picture' src="https://i.postimg.cc/NFXW1zDT/aixa-img.jpg" alt="" />
        </figure>
        <div className="sectionInfo">
          <h2>Sobre mí</h2>
          <p>Me dedico a la fotografía desde muy chica cuando empecé a trabajar por mi gusto. Cuando comencé como community manager y content creator mi objetivo siempre fue ayudar y entender lo que necesitan aquellos emprendimientos para embellecer sus trabajos.
          Si querés hacer un cambio en tu marca o emprendimiento, no dudes en contactarme.
          </p>
        </div>
      </div>

      <div className='servicesWrapper'>
        <div className='left-row'>
          <div className="sectionInfo">
            <h2>Servicios</h2>
            <p>Ofrezco servicios profesionales de creación de contenido para redes, community manager, fotografía y video orientados a tu proyecto o emprendimiento.
            </p>          
          </div>
          <div className="service-grid">
          {
            services.map((service, index) => (

              <Link key={index} to={`/services/${service.category}`} style={{ color:'#333' }}>
                <div  className="service">
                <div className="service-icon">
                  <i className='icon'>{service.icon}</i>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore voluptatem dolorem sunt eos. Nulla error culpa necessitatibus beatae quisquam?</p>

                </div>
                <div className='container-arrow'>
                  <i className='arrow'><MdOutlineArrowForwardIos /></i>

                </div>
                
              </div>
              </Link>

              
              
            ))

          }
          </div>
        </div>
        <figure>
        <img src="https://i.postimg.cc/D0PhynV3/IMG-1835-1.jpg" alt="" />
        </figure>
        
      </div>
    </section>
  )
}
export default About