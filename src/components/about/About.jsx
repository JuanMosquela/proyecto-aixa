import { Link } from 'react-router-dom';
import './about.scss'

const About = () => {
  return (
    <div className="about">

      <section>
        <div>
          <img src="https://i.postimg.cc/qqwyk2th/espressoaixa.jpg" alt="" />
        </div>
        <div className="sectionInfo">
          <h2>Sobre mí</h2>
          <p>Me dedico a la fotografía desde muy chica cuando empecé a trabajar por mi gusto. Cuando comencé como community manager y content creator mi objetivo siempre fue ayudar y entender lo que necesitan aquellos emprendimientos para embellecer sus trabajos.
          Si querés hacer un cambio en tu marca o emprendimiento, no dudes en contactarme.
          </p>
        </div>
      </section>

      <section>
        <div className="sectionInfo">
          <h2>Servicios</h2>
          <p>Ofrezco servicios profesionales de creación de contenido para redes, community manager, fotografía y video orientados a tu proyecto o emprendimiento.
          </p>
          <Link to="/services"><button>VER SERVICIOS</button></Link>
        </div>
        <div>
          <img src="https://i.postimg.cc/qqwyk2th/espressoaixa.jpg" alt="" />
        </div>
      </section>
    </div>
  )
}
export default About