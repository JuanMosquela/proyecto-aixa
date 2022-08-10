import { Link } from 'react-router-dom';
import './about.scss'

const About = () => {
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

      <div className='container-row'>
        <div className="sectionInfo">
          <h2>Servicios</h2>
          <p>Ofrezco servicios profesionales de creación de contenido para redes, community manager, fotografía y video orientados a tu proyecto o emprendimiento.
          </p>
          <Link to="/services"><button>VER SERVICIOS</button></Link>
        </div>
        <figure>
          <img src="https://i.postimg.cc/qqwyk2th/espressoaixa.jpg" alt="" />
        </figure>
      </div>
    </section>
  )
}
export default About