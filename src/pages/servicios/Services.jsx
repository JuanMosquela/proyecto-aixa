import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import dataServices from "../../data/dataServices"
import './services.scss'

const Services = () => {

  const [servicesData, setServicesData] = useState(dataServices)

  
  


  return (
    <section>
      {servicesData.map(el => (
        <div key={el.category} className="service-container">
          <figure>
            <img src={el.picture_URL} alt={el.title} />
          </figure>
          <div className="service-content">
            <h3>{el.title}</h3>
            <h4>{el.subtitle}</h4>
            <Link to={`/services/${el.category}`}>
              <button>ver mas</button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
export default Services